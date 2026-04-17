"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
          Visual Designer
        </p>
        <h1 className="text-6xl sm:text-8xl font-semibold tracking-tighter leading-none text-zinc-900">
          丁韵光
        </h1>
        <p className="mt-6 text-lg text-zinc-500 max-w-md leading-relaxed">
          专注于 3D 动画、视觉设计与品牌创意，
          <br />
          将想象力转化为有质感的视觉语言。
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/works"
            className="px-6 py-3 bg-zinc-900 text-white text-sm hover:bg-zinc-700 transition-colors"
          >
            查看作品
          </Link>
          <Link
            href="/contact"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4"
          >
            联系合作
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
