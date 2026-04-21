"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[94vh] flex flex-col justify-center max-w-6xl mx-auto px-8 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 上方小标签 */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#888888] font-light mb-12">
          Visual Designer — Beijing
        </p>

        {/* 衬线大标题 */}
        <h1
          className="text-[clamp(3.5rem,9vw,8rem)] font-normal leading-[1.05] tracking-tight text-[#111111]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          丁韵光
        </h1>

        {/* 副标题 */}
        <p
          className="mt-4 text-[clamp(1.5rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-[#888888]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          3D Animation & Visual Design
        </p>

        {/* 分割线 */}
        <div className="my-12 w-16 border-t border-[#111111]" />

        {/* 介绍文字 + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-10">
          <p className="text-sm text-[#888888] font-light leading-relaxed max-w-xs">
            专注于 3D 动画、视觉设计与品牌创意，
            将想象力转化为有质感的视觉语言。
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/works"
              className="text-xs tracking-[0.2em] uppercase font-light border-b border-[#111111] pb-0.5 hover:text-[#888888] hover:border-[#888888] transition-colors"
            >
              View Works
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.2em] uppercase font-light text-[#888888] hover:text-[#111111] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 底部页码装饰 */}
      <div className="absolute bottom-10 right-8 flex items-center gap-3">
        <div className="w-6 border-t border-[#E5E5E5]" />
        <span className="text-xs text-[#E5E5E5] tracking-widest font-light">01</span>
      </div>
    </section>
  );
}
