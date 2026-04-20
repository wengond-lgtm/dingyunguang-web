"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* 大色块背景 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF2D20] z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE600] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full min-h-[92vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 标签 */}
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#0A0A0A] mb-6"
          >
            Visual Designer
          </motion.p>

          {/* 超大主标题——跨越色块 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(5rem,16vw,14rem)] font-black leading-none tracking-tighter text-[#0A0A0A] mix-blend-multiply"
            >
              丁韵光
            </motion.h1>
          </div>

          {/* 副标题行 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <p className="text-sm font-medium text-[#0A0A0A] max-w-xs leading-relaxed">
              3D Animation · Visual Design<br />
              Brand Identity · Creative Direction
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/works"
                className="px-8 py-4 bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FF2D20] transition-colors"
              >
                View Works
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#FFE600] transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between z-10">
        <span className="text-xs font-bold tracking-widest text-[#0A0A0A]/40 uppercase">Portfolio 2024</span>
        <span className="text-xs font-bold tracking-widest text-[#0A0A0A]/40 uppercase">dingyunguang.com</span>
      </div>
    </section>
  );
}
