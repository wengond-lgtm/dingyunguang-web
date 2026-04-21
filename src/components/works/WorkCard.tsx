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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <Link href={`/works/${work.slug}`} className="group block">
        <div className="relative overflow-hidden bg-[#F0F0F0] aspect-[4/3]">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="w-full h-full bg-[#E8E8E8] flex items-center justify-center">
              <span className="text-xs tracking-[0.2em] uppercase text-[#BBBBBB] font-light">No Image</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2
              className="text-base font-normal text-[#111111] group-hover:text-[#888888] transition-colors"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {work.title}
            </h2>
            {work.medium.length > 0 && (
              <p className="mt-1 text-xs tracking-[0.15em] uppercase font-light text-[#BBBBBB]">
                {work.medium[0]}
              </p>
            )}
          </div>
          {work.year && (
            <span className="text-xs font-light text-[#BBBBBB] shrink-0 ml-4">{work.year}</span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
