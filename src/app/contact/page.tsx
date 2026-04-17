import type { Metadata } from "next";

export const metadata: Metadata = { title: "联系我" };

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">联系我</h1>
      <p className="mt-8 text-zinc-500">联系页面 —— Day 5 实现</p>
    </main>
  );
}
