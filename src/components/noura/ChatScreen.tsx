import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useStreamingChat } from '@/hooks/useChatStream';
import { MessageSchema, MessageSchemaInitData, MessageSchemaType } from '@/services/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

type ChatScreenProps = {
    onBack: () => void;
};

export default function ChatScreen({ onBack }: ChatScreenProps) {
    const form = useForm<MessageSchemaType>({ resolver: zodResolver(MessageSchema), defaultValues: MessageSchemaInitData });
    const { messages, sendMessage, isLoading } = useStreamingChat();

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Auto-focus input when message streaming ends
    useEffect(() => {
        if (!isLoading && messages.length > 0) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isLoading, messages.length]);

    // Submit form
    function onSubmit(values: MessageSchemaType) {
        if (values.message.trim() && !isLoading) {
            sendMessage(values.message);
            form.reset(MessageSchemaInitData);
            inputRef.current?.focus();
        }
    }

    return (
        <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 border-b-2 border-b-[#1a1a2b] px-4 py-6">
                <img src="/arrow_left_icon.svg" className="size-10 cursor-pointer" onClick={onBack} />
                <h1 className="text-2xl font-medium text-white">Noura AI</h1>
            </div>

            {/* Messages Area - Scrollable */}
            <div className="flex-1 overflow-hidden">
                {messages.length > 0 ? (
                    <div className="h-full overflow-y-auto p-4">
                        <div className="mx-auto max-w-4xl space-y-6">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-lg border-2 px-4 py-3 text-white ${message.role === "user" ? "border-[#8184FF]" : "border-white/10 bg-white/10"}`}>
                                        <div className="whitespace-pre-wrap">
                                            {message.content}
                                            {message.isStreaming && <span className="ml-1 animate-pulse">▋</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <h2 className="mb-32 text-center text-4xl font-medium text-white">Hello!</h2>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mb-8 px-4">
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("I want to join Vision Bank")} disabled={isLoading}>
                        <img src="/person_icon.svg" className="size-6" />
                        Join Vision Bank
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("Tell me about Vision Bank")} disabled={isLoading}>
                        <img src="/io_icon.svg" className="size-6" />
                        About Vision Bank
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("What are your frequently asked questions?")} disabled={isLoading}>
                        <img src="/question_icon.svg" className="size-6" />
                        FAQ
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("What offers do you currently have?")} disabled={isLoading}>
                        <img src="/request_icon.svg" className="size-6" />
                        Offers
                    </Button>
                </div>
            </div>

            {/* Chat Input */}
            <Form {...form}>
                <form className="relative mb-8 px-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="chat-input-focus">
                                <FormControl className="chat-input-focus">
                                    <Input placeholder="Type your message..." className="border-primary h-20 border-2 px-12 text-3xl placeholder:text-3xl placeholder:text-white/70 md:text-3xl" {...field} ref={inputRef} autoComplete="off" autoFocus disabled={isLoading} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="absolute top-1/2 right-6 -translate-y-1/2" size="icon" disabled={isLoading || !form.watch("message")?.trim()}>
                        <img src="/send_button.svg" className="size-8" />
                    </Button>
                </form>
            </Form>
        </div>
    );
}
