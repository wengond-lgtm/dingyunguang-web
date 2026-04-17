"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Work } from "@/types/work";

interface Props {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link href={`/works/${work.slug}`} className="group block">
        <div className="relative overflow-hidden bg-white/[0.03] border border-white/[0.06] aspect-[4/3]">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/10 text-xs font-mono tracking-widest">
              NO IMAGE
            </div>
          )}
          <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
            {work.summary && (
              <p className="text-white/80 text-xs font-mono leading-relaxed line-clamp-2">
                {work.summary}
              </p>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium text-white/80 group-hover:text-[#00F0FF] transition-colors">
              {work.title}
            </h2>
            {work.medium.length > 0 && (
              <p className="mt-0.5 text-xs font-mono text-white/25 tracking-widest uppercase">
                {work.medium[0]}
              </p>
            )}
          </div>
          {work.year && (
            <span className="text-xs font-mono text-white/20 shrink-0">{work.year}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
