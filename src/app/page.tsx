"use client";
import ReactTogetherProvider from "../components/ReactTogetherProvider";
import UseStateTogetherExample from "../components/UseStateTogetherExample";
import LearnMore from "../components/LearnMore";

export default function Home() {
  return (
    <ReactTogetherProvider>
      <div className="min-h-screen flex items-center justify-center p-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">NextJS + react-together starter</h1>
          <UseStateTogetherExample />
          <LearnMore />
        </div>
      </div>
    </ReactTogetherProvider>
  );
}
