"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type AppProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
