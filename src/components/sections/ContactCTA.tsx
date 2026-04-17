"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-6 py-24 border-t border-zinc-100 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight">有想法？一起聊聊。</h2>
        </div>
        <div className="flex flex-col gap-3 text-sm text-zinc-500">
          <a href="mailto:hello@dingyunguang.com" className="hover:text-zinc-900 transition-colors">
            hello@dingyunguang.com
          </a>
          <Link href="/contact" className="hover:text-zinc-900 transition-colors underline underline-offset-4">
            查看联系方式 →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
