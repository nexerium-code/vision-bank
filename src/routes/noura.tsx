import WelcomeScreen from '@/components/noura/WelcomeScreen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/noura")({
    component: RouteComponent
});

function RouteComponent() {
    return (
        <section className="bg-background relative h-[1920px] w-[1080px] overflow-hidden">
            <div className="chat-background" />
            <WelcomeScreen />
        </section>
    );
}
