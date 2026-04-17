export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-4xl font-semibold tracking-tight">丁韵光</h1>
      <p className="mt-4 text-lg text-zinc-500">视觉设计师 · 作品集建设中</p>
      <a
        href="/works"
        className="mt-8 px-6 py-3 border border-zinc-900 text-sm hover:bg-zinc-900 hover:text-white transition-colors"
      >
        查看作品
      </a>
    </main>
  );
}
