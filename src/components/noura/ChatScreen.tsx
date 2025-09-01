import { ArrowLeft, Mic } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ChatScreen() {
    return (
        <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 border-b-2 border-b-[#1a1a2b] px-4 py-8">
                <ArrowLeft className="size-8 hover:text-white/60" />
                <h1 className="text-2xl font-medium text-white">Noura AI</h1>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col items-center justify-center">
                <div className="mb-32">
                    <h2 className="text-center text-4xl font-medium text-white">Hello!</h2>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 space-y-4">
                <div className="flex gap-4">
                    <Button variant="outline" className="h-12 flex-1 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                        <span className="mr-2">👤</span>
                        Join Vision Bank
                    </Button>
                    <Button variant="outline" className="h-12 flex-1 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                        <span className="mr-2">🏦</span>
                        About Vision Bank
                    </Button>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-12 flex-1 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                        <span className="mr-2">❓</span>
                        FAQ
                    </Button>
                    <Button variant="outline" className="h-12 flex-1 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                        <span className="mr-2">🎁</span>
                        Offers
                    </Button>
                </div>
            </div>

            {/* Chat Input */}
            <div className="relative mb-8 px-4">
                <Input placeholder="How may I help you today?" className="h-20 rounded-full border-white/8 bg-white/10 ps-10 pe-14 font-light text-white backdrop-blur-sm placeholder:text-white/60 md:text-xl" />
                <Button size="icon" className="absolute top-2 right-2 h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/30">
                    <Mic className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
