import { useState } from 'react';

import ChatScreen from '@/components/screen-two/ChatScreen';
import Dashboard from '@/components/screen-two/Dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/screen-two")({
    component: RouteComponent
});

function RouteComponent() {
    const [screen, setScreen] = useState<"dashboard" | "chat">("dashboard");
    return (
        <section className="bg-background relative h-[1920px] w-[1080px] overflow-hidden">
            <div className="chat-background" />
            {screen === "dashboard" && <Dashboard />}
            {screen === "chat" && <ChatScreen onBack={() => setScreen("dashboard")} />}
        </section>
    );
}
