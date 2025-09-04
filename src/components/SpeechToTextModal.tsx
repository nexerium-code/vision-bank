"use client";

import { MicOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
    error: string;
    message?: string;
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
    onend: ((this: SpeechRecognition, ev: Event) => void) | null;
    start(): void;
    stop(): void;
}

interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
}

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}

interface SpeechToTextModalProps {
    onClose: () => void;
}

export default function SpeechToTextModal({ onClose }: SpeechToTextModalProps) {
    const [transcript, setTranscript] = useState("");
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    useEffect(() => {
        // Check if speech recognition is supported
        const SpeechRecognitionClass =
            (
                window as unknown as {
                    SpeechRecognition?: SpeechRecognitionConstructor;
                    webkitSpeechRecognition?: SpeechRecognitionConstructor;
                }
            ).SpeechRecognition ||
            (
                window as unknown as {
                    SpeechRecognition?: SpeechRecognitionConstructor;
                    webkitSpeechRecognition?: SpeechRecognitionConstructor;
                }
            ).webkitSpeechRecognition;

        if (SpeechRecognitionClass) {
            recognitionRef.current = new SpeechRecognitionClass();

            // Configure speech recognition
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = "en-US";

            // Event handlers
            recognitionRef.current.onstart = () => {
                console.log("Speech recognition started");
            };

            recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
                let finalTranscript = "";

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const result = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += result + " ";
                    }
                }

                // Append final results to existing transcript
                if (finalTranscript) {
                    setTranscript((prev) => (prev + finalTranscript).trim());
                }
            };

            recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
                console.error("Speech recognition error:", event.error);
            };

            recognitionRef.current.onend = () => {
                console.log("Speech recognition ended");
            };
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Start listening when component mounts
    useEffect(() => {
        if (recognitionRef.current) {
            setTranscript("");
            recognitionRef.current.start();
        }
    }, []);

    const handleFinishRecording = () => {
        console.log("Final transcript:", transcript);
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        onClose();
    };

    return (
        <div className="bg-background fixed inset-0 z-50 h-[1920px] w-[1080px] overflow-hidden">
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
