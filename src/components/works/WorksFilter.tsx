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
    if (value) {
      params.set("medium", value);
    } else {
      params.delete("medium");
    }
    router.push(`/works?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => handleFilter(f.value)}
          className={cn(
            "px-4 py-1.5 text-sm border transition-colors",
            current === f.value
              ? "bg-zinc-900 text-white border-zinc-900"
              : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
