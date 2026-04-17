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
    <section className="px-6 py-24 max-w-7xl mx-auto w-full border-t border-white/[0.06]">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase mb-2">Selected Work</p>
          <h2 className="text-2xl font-semibold tracking-tight">精选项目</h2>
        </div>
        <Link
          href="/works"
          className="text-xs font-mono tracking-widest text-white/30 hover:text-[#00F0FF] transition-colors uppercase"
        >
          All Works →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            className={i === 0 ? "sm:col-span-2" : ""}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
          >
            <Link href={`/works/${work.slug}`} className="group block">
              <div
                className={`relative overflow-hidden bg-white/[0.03] border border-white/[0.06] ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {work.thumbnail ? (
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    sizes={i === 0 ? "66vw" : "33vw"}
                    className="object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10 text-xs font-mono tracking-widest">
                    NO IMAGE
                  </div>
                )}
                {/* 角落序号 */}
                <span className="absolute top-3 right-3 text-xs font-mono text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white/80 group-hover:text-[#00F0FF] transition-colors">
                    {work.title}
                  </h3>
                  {work.summary && (
                    <p className="mt-1 text-xs font-mono text-white/25 line-clamp-1">{work.summary}</p>
                  )}
                </div>
                {work.year && (
                  <span className="text-xs font-mono text-white/20 shrink-0 ml-4">{work.year}</span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
