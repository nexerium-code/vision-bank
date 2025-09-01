import '@/index.css';
import '@/locales/i18n';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from '@/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Initialize Query Client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3 * 60 * 1000 // Data is fresh for 3 minutes
        }
    }
});

// Create a new router instance
const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadDelay: 500,
    defaultPreloadStaleTime: 3 * 60 * 1000,
    scrollRestoration: true,
    context: { queryClient }
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
);
