"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PrivateRouteProps } from "../types";

export function ThemeProvider({ children }: PrivateRouteProps) {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
