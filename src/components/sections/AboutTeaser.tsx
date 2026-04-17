"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="px-6 py-24 border-t border-white/[0.06] max-w-7xl mx-auto w-full">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase mb-6">About</p>
          <p className="text-2xl leading-relaxed text-white/60 font-light">
            我是一名视觉设计师，相信好的设计源于对问题的深入理解，
            而不仅仅是对形式的追求。
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs font-mono tracking-widest uppercase text-white/30 hover:text-[#00F0FF] transition-colors"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
