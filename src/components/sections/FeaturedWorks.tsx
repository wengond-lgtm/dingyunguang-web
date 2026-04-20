"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/types/work";

interface Props {
  works: Work[];
}

export default function FeaturedWorks({ works }: Props) {
  if (works.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* 标题行——实验性错位排版 */}
      <div className="flex items-start justify-between mb-16 border-t-4 border-[#0A0A0A] pt-8">
        <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-none">
          Selected<br />
          <span className="text-[#FF2D20]">Work</span>
        </h2>
        <Link
          href="/works"
          className="mt-4 px-6 py-3 bg-[#FFE600] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#FF2D20] hover:text-white transition-colors self-end"
        >
          All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link href={`/works/${work.slug}`} className="group block h-full">
              <div
                className={`relative overflow-hidden bg-[#F0F0F0] ${
                  i === 0 ? "aspect-square sm:aspect-auto sm:h-full min-h-[400px]" : "aspect-[4/3]"
                }`}
              >
                {work.thumbnail ? (
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    sizes={i === 0 ? "66vw" : "33vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-xs font-bold uppercase tracking-widest"
                    style={{ background: i % 2 === 0 ? "#FF2D20" : "#FFE600", color: i % 2 === 0 ? "white" : "#0A0A0A" }}
                  >
                    {work.title}
                  </div>
                )}
                {/* hover 遮罩 */}
                <div className="absolute inset-0 bg-[#FF2D20] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">{work.medium[0]}</p>
                  <h3 className="text-white text-2xl font-black leading-tight">{work.title}</h3>
                  {work.summary && <p className="text-white/80 text-sm mt-2">{work.summary}</p>}
                </div>
              </div>
              {/* 卡片底部 */}
              <div className="mt-2 flex items-center justify-between px-1">
                <h3 className="text-sm font-bold uppercase tracking-wide group-hover:text-[#FF2D20] transition-colors">
                  {work.title}
                </h3>
                {work.year && <span className="text-xs font-bold text-[#0A0A0A]/30">{work.year}</span>}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
