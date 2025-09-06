import { useState } from 'react';

import ChatScreen from '@/components/screen-two/ChatScreen';
import Dashboard from '@/components/screen-two/Dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/screen-two")({
    component: RouteComponent
});

function RouteComponent() {
    const [screen, setScreen] = useState<"dashboard" | "chat">("chat");
    return (
        <section className="flex h-screen items-center justify-center bg-white">
            <div className="bg-background relative h-[844px] w-[390px] overflow-hidden rounded-2xl">
                <div className="chat-background" />
                {screen === "dashboard" && <Dashboard />}
                {screen === "chat" && <ChatScreen onBack={() => setScreen("dashboard")} />}
            </div>
        </section>
    );
}
