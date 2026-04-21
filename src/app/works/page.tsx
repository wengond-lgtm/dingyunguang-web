import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllWorks } from "@/lib/notion";
import WorkCard from "@/components/works/WorkCard";
import WorksFilter from "@/components/works/WorksFilter";

export const metadata: Metadata = { title: "Works" };
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
    <main className="max-w-6xl mx-auto px-8 py-24">
      <div className="border-t border-[#E5E5E5] pt-8 mb-4 flex items-baseline justify-between">
        <h1
          className="text-4xl sm:text-6xl font-normal tracking-tight text-[#111111]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Selected Work
        </h1>
        <span className="text-xs font-light text-[#BBBBBB] tracking-widest">
          {allWorks.length} Projects
        </span>
      </div>

      <Suspense>
        <WorksFilter />
      </Suspense>

      {works.length === 0 ? (
        <p className="mt-16 text-xs tracking-[0.2em] uppercase font-light text-[#BBBBBB]">
          No works found.
        </p>
      ) : (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}
