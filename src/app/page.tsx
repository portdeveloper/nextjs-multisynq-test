"use client";
import ReactTogetherProvider from "../components/ReactTogetherProvider";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <ReactTogetherProvider>
      <Counter />
    </ReactTogetherProvider>
  );
}
