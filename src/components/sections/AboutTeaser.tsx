"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32 px-6">
      {/* 背景大字装饰 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.03] uppercase leading-none whitespace-nowrap">
          DESIGNER
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#FF2D20] mb-8">About</p>
          <p className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-3xl">
            我是一名视觉设计师，
            <span className="text-[#FFE600]">相信好的设计</span>
            源于对问题的深入理解。
          </p>
          <Link
            href="/about"
            className="mt-12 inline-block px-8 py-4 border-2 border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-colors"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
