import type { Metadata } from "next";

export const metadata: Metadata = { title: "作品" };
export const revalidate = 60;

export default function WorksPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Selected Work</h1>
      <p className="mt-4 text-zinc-500">作品列表 —— Day 4 实现</p>
    </main>
  );
}
