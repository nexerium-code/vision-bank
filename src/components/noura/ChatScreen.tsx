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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    function onSubmit(values: MessageSchemaType) {
        if (values.message.trim() && !isLoading) {
            sendMessage(values.message);
            form.reset(MessageSchemaInitData);
        }
    }

    return (
        <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 border-b-2 border-b-[#1a1a2b] px-4 py-6">
                <img src="/arrow_left_icon.svg" className="size-10 cursor-pointer" onClick={onBack} />
                <h1 className="text-2xl font-medium text-white">Noura AI</h1>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col">
                {messages.length > 0 ? (
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="mx-auto max-w-4xl space-y-6">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-lg px-4 py-3 ${message.role === "user" ? "bg-[#8184FF] text-white" : "bg-gray-800 text-white"}`}>
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
                    <div className="flex flex-1 flex-col items-center justify-center">
                        <div className="mb-32">
                            <h2 className="text-center text-4xl font-medium text-white">Hello!</h2>
                        </div>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mb-8 px-4">
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("Tell me about joining Vision Bank")} disabled={isLoading}>
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
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10" onClick={() => sendMessage("What offers do you have?")} disabled={isLoading}>
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
                                    <Input placeholder="Type your message..." className="border-primary h-20 border-2 px-12 text-3xl placeholder:text-3xl placeholder:text-white/70 md:text-3xl" {...field} autoComplete="off" disabled={isLoading} />
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
