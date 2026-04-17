export default function Loading() {
  return (
    <main>
      {/* Hero 骨架 */}
      <div className="w-full aspect-[16/7] bg-zinc-100 animate-pulse" />

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <div className="h-10 w-2/3 bg-zinc-100 animate-pulse rounded" />
        <div className="h-5 w-1/2 bg-zinc-100 animate-pulse rounded" />

        <div className="flex gap-8 pt-6 border-t border-zinc-100">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-12 bg-zinc-100 animate-pulse rounded" />
              <div className="h-4 w-20 bg-zinc-100 animate-pulse rounded" />
            </div>
          ))}
        </div>

        <div className="pt-10 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-zinc-100 animate-pulse rounded" style={{ width: `${90 - i * 5}%` }} />
          ))}
        </div>
      </div>
    </main>
  );
}
