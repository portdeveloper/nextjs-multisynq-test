"use client";
import { useStateTogether } from "react-together";

export default function Counter() {
  const [count, setCount] = useStateTogether("count", 0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-2 justify-center m-auto">
          <button
            className="bg-gray-400 py-2 px-4 rounded-md text-white"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="bg-gray-400 py-2 px-4 rounded-md text-white"
            onClick={() =>
              setCount((prev) => (prev === undefined ? 1 : prev + 1))
            }
            onContextMenu={(e) => {
              e.preventDefault();
              setCount(0);
            }}
          >
            Count: {count}
          </button>
        </div>
      </main>
    </div>
  );
} 