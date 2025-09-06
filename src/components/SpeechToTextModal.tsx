"use client";

import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

type SpeechToTextModalProps = {
    onBack: () => void;
    onEmit: (transcript: string) => void;
};

export default function SpeechToTextModal({ onBack, onEmit }: SpeechToTextModalProps) {
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
        <div className="bg-background absolute inset-0 z-50 h-[844px] w-[390px] overflow-hidden rounded-2xl">
            <div className="chat-background" />
            <div className="relative z-10 flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center border-b-2 border-b-[#1a1a2b] p-4">
                    <img src="/arrow_left_icon.svg" className="size-10 cursor-pointer" onClick={onBack} />
                    <h1 className="text-base font-medium text-white">Noura AI</h1>
                </div>

                {/* Simple listening text */}
                <div className="flex flex-1 items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-pulse rounded-full bg-green-500"></div>
                    <span className="text-xl font-medium text-white">Listening...</span>
                </div>

                {/* Finish button at bottom */}
                <div className="flex items-center justify-between px-6 pb-6">
                    <img src="chat_icon.svg" alt="chaticon" className="size-12 cursor-pointer" onClick={handleFinishRecording} />
                    <img src="close_icon.svg" alt="closeicon" className="size-12 cursor-pointer" onClick={handleFinishRecording} />
                </div>
            </div>
        </div>
    );
}
