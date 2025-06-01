export default function LearnMore() {
  return (
    <div className="mt-8 space-y-2">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        Learn More
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
        <a
          href="https://reacttogether.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
        >
          React Together Docs
        </a>
        <span className="hidden sm:inline text-gray-400">•</span>
        <a
          href="https://github.com/portdeveloper/nextjs-multisynq-test"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
} 