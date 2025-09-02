import { useState } from 'react';

import { sendMessage } from '@/services/main.api';
import { useMutation } from '@tanstack/react-query';

type Message = {
    id: string;
    content: string;
    role: "user" | "assistant";
    isStreaming?: boolean;
};

export function useStreamingChat() {
    const [messages, setMessages] = useState<Message[]>([]);

    const addUserMessage = (content: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            role: "user"
        };
        setMessages((prev) => [...prev, userMessage]);
        return userMessage.id;
    };

    const addAssistantMessage = () => {
        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "",
            role: "assistant",
            isStreaming: true
        };
        setMessages((prev) => [...prev, assistantMessage]);
        return assistantMessage.id;
    };

    const updateAssistantMessage = (messageId: string, contentUpdater: (prev: string) => string, isComplete = false) => {
        setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, content: contentUpdater(msg.content), isStreaming: !isComplete } : msg)));
    };

    const streamMutation = useMutation({
        mutationFn: async (message: string) => {
            return new Promise<void>((resolve, reject) => {
                // Add user message
                addUserMessage(message);

                // Add assistant message placeholder
                const assistantMessageId = addAssistantMessage();

                // Check if this is the first message (new chat)
                const isNewChat = messages.length === 0;

                sendMessage(
                    message,
                    isNewChat,
                    // onChunk
                    (content) => {
                        updateAssistantMessage(assistantMessageId, (prev) => prev + content, false);
                    },
                    // onComplete
                    () => {
                        updateAssistantMessage(assistantMessageId, (prev) => prev, true);
                        resolve();
                    },
                    // onError
                    (error) => {
                        // Remove the assistant message if there was an error
                        setMessages((prev) => prev.filter((msg) => msg.id !== assistantMessageId));
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

    return {
        messages,
        sendMessage: sendChatMessage,
        isLoading: streamMutation.isPending,
        error: streamMutation.error
    };
}
