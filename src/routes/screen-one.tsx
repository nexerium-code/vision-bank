import { useState } from 'react';

import ChatScreen from '@/components/screen-one/ChatScreen';
import WelcomeScreen from '@/components/screen-one/WelcomeScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/screen-one")({
    component: RouteComponent
});

function RouteComponent() {
    const [screen, setScreen] = useState<"welcome" | "chat">("welcome");
    return (
        <section className="flex h-screen items-center justify-center bg-white">
            <section className="bg-background relative h-[844px] w-[390px] overflow-hidden rounded-2xl">
                <div className="chat-background" />
                {screen === "welcome" && <WelcomeScreen onClick={() => setScreen("chat")} />}
                {screen === "chat" && <ChatScreen onBack={() => setScreen("welcome")} />}
            </section>
        </section>
    );
}
