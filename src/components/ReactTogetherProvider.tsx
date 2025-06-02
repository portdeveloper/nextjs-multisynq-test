"use client";

import { StrictMode, useEffect, useState } from "react";
import { ReactTogether } from "react-together";

interface ReactTogetherProviderProps {
  children: React.ReactNode;
}

export default function ReactTogetherProvider({ children }: ReactTogetherProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render until we're on the client side
  if (!isClient) {
    return <div>Loading...</div>;
  }

  // Check if environment variables are available
  const appId = process.env.NEXT_PUBLIC_APP_ID;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!appId || !apiKey || appId === "your-app-id-here") {
    return (
      <div className="p-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <strong>Environment Variables Missing!</strong>
          <p>Please set NEXT_PUBLIC_APP_ID and NEXT_PUBLIC_API_KEY in your .env.local file</p>
          <p className="mt-2 text-sm">
            The Counter component won&apos;t work without proper React Together configuration.
          </p>
        </div>
        <div className="p-8">
          <div className="text-gray-600">
            Counter functionality is disabled until environment variables are configured.
          </div>
        </div>
      </div>
    );
  }

  return (
    <StrictMode>
      <ReactTogether
        sessionParams={{
          appId: appId,
          apiKey: apiKey,
          name: "hello-world",
          password: "super-secret!!",
        }}
      >
        {children}
      </ReactTogether>
    </StrictMode>
  );
}
