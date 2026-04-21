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
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#FAFAFA]",
        scrolled && "border-b border-[#E5E5E5]"
      )}>
        <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
          <Link href="/" className="text-xs tracking-[0.2em] uppercase text-[#111111] hover:text-[#888888] transition-colors font-light">
            丁韵光
          </Link>
          <nav className="hidden sm:flex items-center gap-10">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase font-light transition-colors",
                  pathname.startsWith(href)
                    ? "text-[#111111]"
                    : "text-[#888888] hover:text-[#111111]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="菜单"
          >
            <span className="text-xs tracking-[0.15em] uppercase font-light text-[#888888]">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {/* 移动端菜单 */}
      <div className={cn(
        "fixed inset-0 z-30 bg-[#FAFAFA] flex flex-col justify-center items-start px-10 gap-10 transition-opacity duration-300 sm:hidden",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-serif text-5xl font-normal text-[#111111] hover:text-[#888888] transition-colors"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
