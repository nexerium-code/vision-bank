import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MessageSchema, MessageSchemaInitData, MessageSchemaType } from '@/services/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

type ChatScreenProps = {
    onBack: () => void;
};

export default function ChatScreen({ onBack }: ChatScreenProps) {
    const form = useForm<MessageSchemaType>({ resolver: zodResolver(MessageSchema), defaultValues: MessageSchemaInitData });

    function onSubmit(values: MessageSchemaType) {
        console.log(values);
        form.reset(MessageSchemaInitData);
    }

    return (
        <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 border-b-2 border-b-[#1a1a2b] px-4 py-6">
                <img src="/arrow_left_icon.svg" className="size-10" onClick={onBack} />
                <h1 className="text-2xl font-medium text-white">Noura AI</h1>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col items-center justify-center">
                <div className="mb-32">
                    <h2 className="text-center text-4xl font-medium text-white">Hello!</h2>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 px-4">
                <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10">
                        <img src="/person_icon.svg" className="size-6" />
                        Join Vision Bank
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10">
                        <img src="/io_icon.svg" className="size-6" />
                        About Vision Bank
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10">
                        <img src="/question_icon.svg" className="size-6" />
                        FAQ
                    </Button>
                    <Button variant="outline" className="h-14 rounded-full border-2 border-[#8184FF] bg-transparent px-6 text-base text-white hover:bg-white/10">
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
                                    <Input placeholder="Enter Name..." className="border-primary h-20 border-2 px-12 text-3xl placeholder:text-3xl placeholder:text-white/70 md:text-3xl" {...field} autoComplete="off" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                    {/* <img src="/send_button.svg" className="absolute top-0.5 right-6 z-10 size-20" />
                    <img src="/mask_light.svg" className="absolute right-6 bottom-0 rounded-full" /> */}
                </form>
            </Form>
        </div>
    );
}
