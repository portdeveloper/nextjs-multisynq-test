"use client";
import ReactTogetherProvider from "../components/ReactTogetherProvider";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <ReactTogetherProvider>
      <div className="min-h-screen p-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            React Together Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Real-time collaborative state management demo
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Live Counter Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Open this page in multiple tabs to see real-time sync!
            </p>
            <Counter />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Learn More
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://reacttogether.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                React Together Docs
              </a>
              <a
                href="https://github.com/portdeveloper/nextjs-multisynq-test"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </ReactTogetherProvider>
  );
}
