import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#FF2D20]">
      <p className="text-[20vw] font-black text-white/10 leading-none select-none absolute">404</p>
      <div className="relative z-10">
        <h1 className="text-6xl font-black uppercase text-white tracking-tighter">
          页面不见了
        </h1>
        <p className="mt-4 text-sm font-bold text-white/60 uppercase tracking-widest">
          This page does not exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block px-8 py-4 bg-white text-[#FF2D20] text-xs font-black uppercase tracking-widest hover:bg-[#FFE600] hover:text-[#0A0A0A] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
