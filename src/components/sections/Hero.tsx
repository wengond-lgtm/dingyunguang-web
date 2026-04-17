"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-end px-6 pb-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 标签行 */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <p className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase">
            Visual Designer
          </p>
        </div>

        {/* 主标题 */}
        <h1 className="text-7xl sm:text-[10rem] font-bold tracking-tighter leading-none text-white">
          丁韵光
        </h1>

        {/* 副标题 */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12">
          <p className="text-sm font-mono text-white/40 leading-relaxed max-w-xs">
            3D Animation · Visual Design<br />
            Brand Identity · Creative Direction
          </p>
          <div className="h-px flex-1 bg-white/[0.06] hidden sm:block" />
          <p className="text-xs font-mono text-white/25 tracking-widest">
            EST. 2024
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center gap-6">
          <Link
            href="/works"
            className="group relative px-6 py-3 text-xs font-mono tracking-widest uppercase border border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#080808] transition-all duration-200"
          >
            View Works
          </Link>
          <Link
            href="/contact"
            className="text-xs font-mono tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
