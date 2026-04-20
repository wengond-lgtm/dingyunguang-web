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
      {/* 大标题 */}
      <div className="border-t-4 border-[#0A0A0A] pt-8 mb-4">
        <h1 className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-none">
          Works
        </h1>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/30">
        {allWorks.length} Projects
      </p>

      <Suspense>
        <WorksFilter />
      </Suspense>

      {works.length === 0 ? (
        <p className="mt-16 text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/30">
          No Works Found
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}
