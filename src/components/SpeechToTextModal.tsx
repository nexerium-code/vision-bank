"use client";

import { MicOff } from 'lucide-react';
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Button } from '@/components/ui/button';

type SpeechToTextModalProps = {
    onEmit: (transcript: string) => void;
};

export default function SpeechToTextModal({ onEmit }: SpeechToTextModalProps) {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        // Reset transcript and start listening
        resetTranscript();
        SpeechRecognition.startListening({
            continuous: true,
            language: "en-US"
        });

        // Cleanup
        return () => {
            SpeechRecognition.stopListening();
        };
    }, [browserSupportsSpeechRecognition, resetTranscript]);

    // Finish recording
    function handleFinishRecording() {
        onEmit(transcript);
        SpeechRecognition.stopListening();
    }

    if (!browserSupportsSpeechRecognition) return null;

    return (
        <div className="bg-background fixed inset-0 z-50 h-[844px] w-[390px] overflow-hidden rounded-2xl">
            <div className="chat-background" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                {/* Simple listening text */}
                <div className="mb-8 flex items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-xl font-medium text-white">Listening...</span>
                </div>

                {/* Finish button at bottom */}
                <div className="absolute bottom-8">
                    <Button onClick={handleFinishRecording} size="lg" className="gap-2 px-8 py-4">
                        <MicOff className="h-5 w-5" />
                        Finish Recording
                    </Button>
                </div>
            </div>
        </div>
    );
}
