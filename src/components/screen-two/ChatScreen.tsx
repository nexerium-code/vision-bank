import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useChatTwoStream } from '@/hooks/useChatTwoStream';
import { MessageSchema, MessageSchemaInitData, MessageSchemaType } from '@/services/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import SpeechToTextModal from '../SpeechToTextModal';

type ChatScreenProps = {
    onBack: () => void;
};

export default function ChatScreen({ onBack }: ChatScreenProps) {
    const form = useForm<MessageSchemaType>({ resolver: zodResolver(MessageSchema), defaultValues: MessageSchemaInitData });
    const { messages, sendMessage, isLoading } = useChatTwoStream();

    const [speechToTextModalOpen, setSpeechToTextModalOpen] = useState(false);
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

    // Emit transcript
    function onEmit(transcript: string) {
        form.setValue("message", transcript);
        inputRef.current?.focus();
        setSpeechToTextModalOpen(false);
    }

    return (
        <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center border-b-2 border-b-[#1a1a2b] p-4">
                <img src="/arrow_left_icon.svg" className="size-10 cursor-pointer" onClick={onBack} />
                <h1 className="text-base font-medium text-white">Noura AI</h1>
            </div>

            {/* Messages Area - Scrollable */}
            <div className="flex-1 overflow-hidden p-6">
                {messages.length === 0 && !isLoading && (
                    <div className="flex h-full items-center justify-center">
                        <h2 className="text-center text-2xl font-medium text-[#F5F5FF]">Hello!</h2>
                    </div>
                )}
                {messages.length > 0 && (
                    <div className="h-full overflow-y-auto p-4">
                        <div className="mx-auto max-w-4xl space-y-6">
                            {messages
                                .filter((message) => !(message.role === "assistant" && message.content === "" && isLoading))
                                .map((message) => (
                                    <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className={`max-w-[80%] rounded-xl border-[1.2px] px-4 py-2 text-xs text-white ${message.role === "user" ? "border-[#8184FF]" : "border-white/8 bg-white/6"}`}>
                                            <div className="whitespace-pre-wrap">
                                                {message.content}
                                                {message.isStreaming && <span className="ml-1 animate-pulse">|</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            {isLoading && messages.some((msg) => msg.role === "assistant" && msg.isStreaming && msg.content === "") && (
                                <div className="flex items-center justify-start px-4 py-2">
                                    <div className="flex space-x-1">
                                        <div className="size-3 animate-pulse rounded-full bg-[#8184FF]"></div>
                                        <div className="size-3 animate-pulse rounded-full bg-[#8184FF]" style={{ animationDelay: "0.2s" }}></div>
                                        <div className="size-3 animate-pulse rounded-full bg-[#8184FF]" style={{ animationDelay: "0.4s" }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="mb-4 px-6">
                <div className="flex flex-wrap gap-2.5">
                    <Button variant="outline" className="h-8 rounded-full border-2 border-[#8184FF] bg-transparent px-4 text-xs text-white hover:bg-white/10" onClick={() => sendMessage("Give me an account summary")} disabled={isLoading}>
                        Account Summary
                    </Button>
                    <Button variant="outline" className="h-8 rounded-full border-2 border-[#8184FF] bg-transparent px-4 text-xs text-white hover:bg-white/10" onClick={() => sendMessage("Give me a savings goal")} disabled={isLoading}>
                        Savings Goal
                    </Button>
                    <Button variant="outline" className="h-8 rounded-full border-2 border-[#8184FF] bg-transparent px-4 text-xs text-white hover:bg-white/10" onClick={() => sendMessage("Give me a spending summary")} disabled={isLoading}>
                        Spending Summary
                    </Button>
                    <Button variant="outline" className="h-8 rounded-full border-2 border-[#8184FF] bg-transparent px-4 text-xs text-white hover:bg-white/10" onClick={() => sendMessage("I want to perform a transfer")} disabled={isLoading}>
                        Perform a Transfer
                    </Button>
                    {/* <Button variant="outline" className="h-8 rounded-full border-2 border-[#8184FF] bg-transparent px-4 text-xs text-white hover:bg-white/10" onClick={() => sendMessage("Give me a smart budgeting summary")} disabled={isLoading}>
                        Smart Budgeting
                    </Button> */}
                </div>
            </div>

            {/* Chat Input */}
            <Form {...form}>
                <form className="relative mb-8 overflow-hidden px-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="chat-input-focus">
                                <FormControl className="chat-input-focus">
                                    <Input placeholder="How may I help you today?" className="border-primary h-[64px] ps-5 pe-20 text-xs placeholder:text-[#A6A8BA] md:text-xs" {...field} ref={inputRef} autoComplete="off" autoFocus disabled={isLoading} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <button type="submit" className="hidden" disabled={isLoading} />
                    <button type="button" className="btn-unstyled absolute top-1/2 right-[29px] z-20 -translate-y-1/2" disabled={isLoading} onClick={() => setSpeechToTextModalOpen(true)}>
                        <img src="/send_button.svg" className="size-18" />
                    </button>
                    <img src="/mask_light.svg" className="absolute top-1/2 right-[25px] z-10 h-[64px] w-[108px] -translate-y-1/2 rounded-full" alt="" />
                </form>
            </Form>
            {speechToTextModalOpen && <SpeechToTextModal onBack={onBack} onEmit={onEmit} />}
        </div>
    );
}
