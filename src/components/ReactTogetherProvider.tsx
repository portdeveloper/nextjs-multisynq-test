"use client";

import { StrictMode } from "react";
import { ReactTogether } from "react-together";

interface ReactTogetherProviderProps {
  children: React.ReactNode;
}

export default function ReactTogetherProvider({
  children,
}: ReactTogetherProviderProps) {
  return (
    <StrictMode>
      <ReactTogether
        sessionParams={{
          appId: process.env.NEXT_PUBLIC_APP_ID!,
          apiKey: process.env.NEXT_PUBLIC_API_KEY!,
          name: "hello-world",
          password: "super-secret!!",
        }}
      >
        {children}
      </ReactTogether>
    </StrictMode>
  );
}
