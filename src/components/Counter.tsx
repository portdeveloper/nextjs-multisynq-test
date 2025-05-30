"use client";
import { useStateTogether } from "react-together";

export default function Counter() {
  const [count, setCount] = useStateTogether("count", 0);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-6xl font-bold text-gray-900 dark:text-white">
        {count}
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <button
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
          onClick={() =>
            setCount((prev) => (prev === undefined ? 1 : prev + 1))
          }
          onContextMenu={(e) => {
            e.preventDefault();
            setCount(0);
          }}
        >
          Increment
        </button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
        Try opening this page in multiple tabs or sharing it with others to see the counter sync in real-time!
      </p>
    </div>
  );
} 