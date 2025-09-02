import { useState } from 'react';

import { sendMessage } from '@/services/main.api';
import { useMutation } from '@tanstack/react-query';

export function useStreamingChat() {
    const [response, setResponse] = useState<string>("");
    const [isStreaming, setIsStreaming] = useState<boolean>(false);

    const streamMutation = useMutation({
        mutationFn: async (message: string) => {
            return new Promise<void>((resolve, reject) => {
                setResponse("");
                setIsStreaming(true);

                sendMessage(
                    message,
                    // onChunk
                    (content) => {
                        setResponse((prev) => prev + content);
                    },
                    // onComplete
                    () => {
                        setIsStreaming(false);
                        resolve();
                    },
                    // onError
                    (error) => {
                        setIsStreaming(false);
                        reject(error);
                    }
                );
            });
        }
    });

    const sendChatMessage = async (message: string) => {
        if (!message.trim()) return;

        try {
            await streamMutation.mutateAsync(message);
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    const clearResponse = () => {
        setResponse("");
    };

    return {
        response,
        isStreaming,
        sendMessage: sendChatMessage,
        clearResponse,
        isLoading: streamMutation.isPending,
        error: streamMutation.error
    };
}
