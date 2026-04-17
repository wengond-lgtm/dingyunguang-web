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

  // 关闭菜单当路由变化
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-sm border-b border-zinc-100" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight hover:text-zinc-500 transition-colors"
          >
            丁韵光
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden sm:flex items-center gap-8">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors",
                  pathname.startsWith(href)
                    ? "text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-900"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* 移动端汉堡 */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="菜单"
          >
            <span className={cn("block w-5 h-px bg-zinc-900 transition-transform duration-200", menuOpen && "translate-y-[7px] rotate-45")} />
            <span className={cn("block w-5 h-px bg-zinc-900 transition-opacity duration-200", menuOpen && "opacity-0")} />
            <span className={cn("block w-5 h-px bg-zinc-900 transition-transform duration-200", menuOpen && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </header>

      {/* 移动端全屏抽屉 */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-white flex flex-col justify-center items-center gap-10 transition-opacity duration-300 sm:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-3xl font-semibold tracking-tight text-zinc-900 hover:text-zinc-400 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
