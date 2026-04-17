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
        <div className="relative overflow-hidden bg-zinc-100 aspect-[4/3]">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-300 text-sm">
              No image
            </div>
          )}
          {/* hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
            {work.summary && (
              <p className="text-white text-sm leading-snug line-clamp-2">
                {work.summary}
              </p>
            )}
          </div>
        </div>
        <div className="mt-3">
          <h2 className="text-base font-medium tracking-tight group-hover:text-zinc-500 transition-colors">
            {work.title}
          </h2>
          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400">
            {work.medium.length > 0 && <span>{work.medium[0]}</span>}
            {work.year && (
              <>
                <span>·</span>
                <span>{work.year}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
