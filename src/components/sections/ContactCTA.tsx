"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#FFE600] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-none text-[#0A0A0A]">
            有想法？<br />
            <span className="text-[#FF2D20]">聊聊。</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
            <a
              href="mailto:hello@dingyunguang.com"
              className="px-8 py-4 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FF2D20] transition-colors"
            >
              hello@dingyunguang.com
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              All Contact →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
