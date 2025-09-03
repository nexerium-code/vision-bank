import { useState } from 'react';

import ChatScreen from '@/components/screen-two/ChatScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/screen-two")({
    component: RouteComponent
});

function RouteComponent() {
    const [screen, setScreen] = useState<"welcome" | "chat">("chat");
    return (
        <section className="bg-background relative h-[1920px] w-[1080px] overflow-hidden">
            <div className="chat-background" />
            {/* {screen === "welcome" && <WelcomeScreen onClick={() => setScreen("chat")} />} */}
            {screen === "chat" && <ChatScreen onBack={() => setScreen("welcome")} />}
        </section>
    );
}
