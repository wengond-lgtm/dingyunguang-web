"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="border-t border-[#E5E5E5] py-32 px-8 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-12"
      >
        <div>
          <p className="text-xs tracking-[0.2em] uppercase font-light text-[#888888] mb-10">Contact</p>
          <h2
            className="text-4xl sm:text-6xl font-normal leading-tight text-[#111111]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            有想法？<br />一起聊聊。
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:hello@dingyunguang.com"
            className="text-xs tracking-[0.15em] uppercase font-light text-[#888888] hover:text-[#111111] transition-colors"
          >
            hello@dingyunguang.com
          </a>
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase font-light border-b border-[#111111] pb-0.5 hover:text-[#888888] hover:border-[#888888] transition-colors self-start"
          >
            All Contact →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
