"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
          scrolled ? "bg-white border-b-2 border-[#0A0A0A]" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-black uppercase tracking-widest hover:text-[#FF2D20] transition-colors">
            丁韵光
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors",
                  pathname.startsWith(href)
                    ? "text-[#FF2D20]"
                    : "text-[#0A0A0A] hover:text-[#FF2D20]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="菜单"
          >
            <span className={cn("block w-6 h-0.5 bg-[#0A0A0A] transition-transform duration-200", menuOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block w-6 h-0.5 bg-[#0A0A0A] transition-opacity duration-200", menuOpen && "opacity-0")} />
            <span className={cn("block w-6 h-0.5 bg-[#0A0A0A] transition-transform duration-200", menuOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </header>

      {/* 移动端全屏菜单 */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-[#FF2D20] flex flex-col justify-center items-start px-10 gap-8 transition-opacity duration-200 sm:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-5xl font-black uppercase tracking-tight text-white hover:text-[#FFE600] transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
