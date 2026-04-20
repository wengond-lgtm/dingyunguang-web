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
            "px-5 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-colors",
            current === f.value
              ? "bg-[#FF2D20] border-[#FF2D20] text-white"
              : "border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#FFE600] hover:border-[#FFE600]"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
