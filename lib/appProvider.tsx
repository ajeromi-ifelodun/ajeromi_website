"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

import Nav from "../app/_shared/layout/nav";

function getPreferredTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}
export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <Nav />
      {children}
    </NextUIProvider>
  );
}
