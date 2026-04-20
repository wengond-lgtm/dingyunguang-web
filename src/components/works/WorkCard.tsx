"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Work } from "@/types/work";

const ACCENT_COLORS = ["#FF2D20", "#FFE600", "#0A0A0A"];

interface Props {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: Props) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const isLight = accent === "#FFE600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Link href={`/works/${work.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/3]" style={{ background: "#F0F0F0" }}>
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-lg font-black uppercase"
              style={{ background: accent, color: isLight ? "#0A0A0A" : "white" }}
            >
              {work.title}
            </div>
          )}
          {/* hover 색 오버레이 */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5"
            style={{ background: accent }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: isLight ? "#0A0A0A" : "white" }}>
              {work.medium[0]}
            </p>
            <h3 className="text-xl font-black leading-tight" style={{ color: isLight ? "#0A0A0A" : "white" }}>
              {work.title}
            </h3>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wide group-hover:text-[#FF2D20] transition-colors">
            {work.title}
          </h2>
          {work.year && <span className="text-xs font-bold text-[#0A0A0A]/25">{work.year}</span>}
        </div>
      </Link>
    </motion.div>
  );
}
