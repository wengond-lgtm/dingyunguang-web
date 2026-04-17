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
    <section className="px-6 py-24 max-w-7xl mx-auto w-full">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
        <Link
          href="/works"
          className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          全部作品 →
        </Link>
      </div>

      {/* 杂志式网格：第一个大图占两列，其余正常 */}
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
                className={`relative overflow-hidden bg-zinc-100 ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
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
                  <div className="w-full h-full flex items-center justify-center text-zinc-300 text-sm">
                    No image
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium group-hover:text-zinc-400 transition-colors">
                    {work.title}
                  </h3>
                  {work.summary && (
                    <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                      {work.summary}
                    </p>
                  )}
                </div>
                {work.year && (
                  <span className="text-xs text-zinc-300 shrink-0 ml-4">{work.year}</span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
