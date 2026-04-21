"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const FILTERS = [
  { label: "All", value: "" },
  { label: "3D", value: "3D" },
  { label: "Web", value: "Web Design" },
  { label: "Graphic", value: "Graphic" },
  { label: "Video", value: "Video" },
  { label: "Photography", value: "Photography" },
];

export default function WorksFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("medium") ?? "";

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("medium", value);
    else params.delete("medium");
    router.push(`/works?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-6 mt-8 border-b border-[#E5E5E5] pb-8">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => handleFilter(f.value)}
          className={cn(
            "text-xs tracking-[0.15em] uppercase font-light transition-colors",
            current === f.value
              ? "text-[#111111] border-b border-[#111111] pb-0.5"
              : "text-[#BBBBBB] hover:text-[#111111]"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
