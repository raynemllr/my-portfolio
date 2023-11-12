"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const RehydrationWrapper = ({ children }: ProviderProps) => {
  // * To avoid hydration issues
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <>{children}</>;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <RehydrationWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </RehydrationWrapper>
  );
}
