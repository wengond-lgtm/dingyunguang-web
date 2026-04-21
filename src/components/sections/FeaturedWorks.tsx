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
    <section className="max-w-6xl mx-auto px-8 py-32">
      {/* 编辑化标题行 */}
      <div className="flex items-baseline justify-between border-t border-[#E5E5E5] pt-8 mb-16">
        <h2
          className="text-xs tracking-[0.2em] uppercase font-light text-[#888888]"
        >
          Selected Work
        </h2>
        <Link
          href="/works"
          className="text-xs tracking-[0.15em] uppercase font-light text-[#888888] hover:text-[#111111] transition-colors"
        >
          All Works →
        </Link>
      </div>

      {/* 作品网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            className={i === 0 ? "sm:col-span-2" : ""}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
          >
            <Link href={`/works/${work.slug}`} className="group block">
              <div className={`relative overflow-hidden bg-[#F0F0F0] ${i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                {work.thumbnail ? (
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    sizes={i === 0 ? "90vw" : "45vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full bg-[#E8E8E8] flex items-center justify-center">
                    <span className="text-xs tracking-[0.2em] uppercase text-[#BBBBBB] font-light">No Image</span>
                  </div>
                )}
              </div>
              {/* 图片下方信息 */}
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3
                    className="text-lg font-normal text-[#111111] group-hover:text-[#888888] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {work.title}
                  </h3>
                  {work.medium.length > 0 && (
                    <p className="mt-1 text-xs tracking-[0.15em] uppercase font-light text-[#BBBBBB]">
                      {work.medium[0]}
                    </p>
                  )}
                </div>
                {work.year && (
                  <span className="text-xs font-light text-[#BBBBBB]">{work.year}</span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
