import { useEffect } from 'react';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/theme-provider';
import { QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: RootComponent
});

function RootComponent() {
    useEffect(() => {
        const preventContextMenu = (e: MouseEvent) => e.preventDefault();
        window.addEventListener("contextmenu", preventContextMenu);
        return () => window.removeEventListener("contextmenu", preventContextMenu);
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Outlet />
            <Toaster richColors />
            {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
            {/* <TanStackRouterDevtools /> */}
        </ThemeProvider>
    );
}
