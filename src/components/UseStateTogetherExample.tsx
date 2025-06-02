"use client";
import { useStateTogether } from "react-together";

export default function UseStateTogetherExample() {
  const [count, setCount] = useStateTogether("count", 0);

  return (
    <div className="rounded-lg p-8 mb-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">useStateTogether</h2>
      <p className="mb-4">Open this page in multiple tabs to see real-time sync!</p>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        Learn more about{" "}
        <a
          href="https://reacttogether.dev/useStateTogether"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline"
        >
          useStateTogether
        </a>
      </p>
      <div className="flex flex-col items-center space-y-6">
        <div className="text-6xl font-bold">{count}</div>
        <div className="flex flex-row gap-4 justify-center">
          <button
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            onClick={() => setCount(prev => (prev === undefined ? 1 : prev + 1))}
            onContextMenu={e => {
              e.preventDefault();
              setCount(0);
            }}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
