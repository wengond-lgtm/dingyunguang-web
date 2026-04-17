import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-widest text-zinc-300 mb-6">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        页面不见了
      </h1>
      <p className="mt-4 text-zinc-400 text-sm max-w-xs leading-relaxed">
        这个页面可能已经移动、删除，或者从来就不存在。
      </p>
      <Link
        href="/"
        className="mt-10 px-6 py-3 border border-zinc-900 text-sm hover:bg-zinc-900 hover:text-white transition-colors"
      >
        回到首页
      </Link>
    </main>
  );
}
