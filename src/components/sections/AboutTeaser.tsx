"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="border-t border-[#E5E5E5] py-32 px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="text-xs tracking-[0.2em] uppercase font-light text-[#888888] mb-10">About</p>
        <p
          className="text-2xl sm:text-3xl font-normal leading-relaxed text-[#111111]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          我是一名视觉设计师，相信好的设计源于对问题的深入理解，而不仅仅是对形式的追求。
        </p>
        <Link
          href="/about"
          className="mt-10 inline-block text-xs tracking-[0.2em] uppercase font-light border-b border-[#111111] pb-0.5 hover:text-[#888888] hover:border-[#888888] transition-colors"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
}
