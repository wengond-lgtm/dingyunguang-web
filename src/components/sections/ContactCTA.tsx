"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-6 py-24 border-t border-white/[0.06] max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
      >
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase mb-4">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white/90">有想法？一起聊聊。</h2>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:hello@dingyunguang.com"
            className="text-xs font-mono tracking-widest text-white/30 hover:text-[#00F0FF] transition-colors"
          >
            hello@dingyunguang.com
          </a>
          <Link
            href="/contact"
            className="text-xs font-mono tracking-widest uppercase text-white/30 hover:text-[#00F0FF] transition-colors"
          >
            All Contact →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
