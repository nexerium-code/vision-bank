import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/noura")({
    component: RouteComponent
});

function RouteComponent() {
    return <div>Noura</div>;
}
