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
        <section className="bg-background relative h-[1920px] w-[1080px] overflow-hidden">
            <div className="chat-background" />
            {screen === "welcome" && <WelcomeScreen onClick={() => setScreen("chat")} />}
            {screen === "chat" && <ChatScreen onBack={() => setScreen("welcome")} />}
        </section>
    );
}
