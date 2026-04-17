import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-mono tracking-[0.5em] text-[#00F0FF] mb-6">404</p>
      <h1 className="text-4xl font-semibold tracking-tight text-white/90">
        页面不见了
      </h1>
      <p className="mt-4 text-xs font-mono text-white/25 max-w-xs leading-relaxed tracking-wider">
        THIS PAGE MAY HAVE MOVED, BEEN DELETED,<br />OR NEVER EXISTED.
      </p>
      <Link
        href="/"
        className="mt-10 px-6 py-3 border border-[#00F0FF]/50 text-xs font-mono tracking-widest text-[#00F0FF] uppercase hover:bg-[#00F0FF] hover:text-[#080808] transition-all"
      >
        Return Home
      </Link>
    </main>
  );
}
