"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
