"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const FILTERS = [
  { label: "ALL", value: "" },
  { label: "3D", value: "3D" },
  { label: "WEB", value: "Web Design" },
  { label: "GRAPHIC", value: "Graphic" },
  { label: "VIDEO", value: "Video" },
  { label: "PHOTO", value: "Photography" },
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
    <div className="flex flex-wrap gap-2 mt-8">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => handleFilter(f.value)}
          className={cn(
            "px-4 py-1.5 text-xs font-mono tracking-widest border transition-colors",
            current === f.value
              ? "border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/5"
              : "border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/60"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
