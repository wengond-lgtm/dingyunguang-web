import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllWorks } from "@/lib/notion";
import WorkCard from "@/components/works/WorkCard";
import WorksFilter from "@/components/works/WorksFilter";

export const metadata: Metadata = { title: "作品" };
export const revalidate = 60;

interface Props {
  searchParams: Promise<{ medium?: string }>;
}

export default async function WorksPage({ searchParams }: Props) {
  const { medium } = await searchParams;
  const allWorks = await getAllWorks();

  const works = medium
    ? allWorks.filter((w) =>
        w.medium.some((m) => m.toLowerCase().includes(medium.toLowerCase()))
      )
    : allWorks;

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-xs font-mono tracking-[0.3em] text-[#00F0FF] uppercase mb-4">Works</p>
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Selected Work</h1>
        <span className="text-xs font-mono text-white/20">{allWorks.length} Projects</span>
      </div>

      <Suspense>
        <WorksFilter />
      </Suspense>

      {works.length === 0 ? (
        <p className="mt-16 text-xs font-mono text-white/20 tracking-widest">NO WORKS FOUND</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}
