/**
 * React Query Provider Configuration
 * Wrap your app with this provider to enable data fetching with caching
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

// Create a client with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time: how long data is considered fresh (5 minutes)
      staleTime: 1000 * 60 * 5,

      // Cache time: how long unused data stays in cache (10 minutes)
      gcTime: 1000 * 60 * 10,

      // Retry failed requests (useful for network issues)
      retry: 1,

      // Don't refetch on window focus in development (can be annoying)
      refetchOnWindowFocus: import.meta.env.PROD,

      // Don't refetch on reconnect by default
      refetchOnReconnect: false,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Only show devtools in development */}
      {import.meta.env.DEV && (
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
        />
      )}
    </QueryClientProvider>
  );
}

// Export the client for advanced usage (prefetching, cache manipulation, etc.)
export { queryClient };
