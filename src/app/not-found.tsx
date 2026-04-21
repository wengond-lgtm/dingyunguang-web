import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-8">
      <p className="text-xs tracking-[0.3em] uppercase font-light text-[#BBBBBB] mb-8">404</p>
      <h1
        className="text-5xl sm:text-7xl font-normal text-[#111111] tracking-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        页面不见了
      </h1>
      <p className="mt-6 text-sm font-light text-[#888888] leading-relaxed max-w-xs">
        这个页面可能已经移动、删除，或者从来就不存在。
      </p>
      <Link
        href="/"
        className="mt-12 inline-block text-xs tracking-[0.2em] uppercase font-light border-b border-[#111111] pb-0.5 hover:text-[#888888] hover:border-[#888888] transition-colors self-start"
      >
        Return Home
      </Link>
    </main>
  );
}
