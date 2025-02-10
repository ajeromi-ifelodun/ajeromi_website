"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "../app/_shared/layout/nav";
import Footer from "../app/_shared/layout/footer";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify";
function getPreferredTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
export default function AppProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Nav />
        {children}
        <Footer />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}
