import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getWorkBySlug, getAllWorks } from "@/lib/notion";
import MediaGallery from "@/components/works/MediaGallery";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const works = await getAllWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) return { title: "作品未找到" };
  return {
    title: work.title,
    description: work.summary ?? undefined,
    openGraph: {
      title: work.title,
      description: work.summary ?? undefined,
      images: work.cover ? [work.cover] : [],
    },
  };
}

const SECTIONS = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const;

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) notFound();

  const allWorks = await getAllWorks();
  const currentIndex = allWorks.findIndex((w) => w.slug === slug);
  const prev = currentIndex > 0 ? allWorks[currentIndex - 1] : null;
  const next = currentIndex < allWorks.length - 1 ? allWorks[currentIndex + 1] : null;

  return (
    <main>
      {/* Hero Cover */}
      {work.cover && (
        <div className="relative w-full aspect-[16/7] bg-zinc-100">
          <Image
            src={work.cover}
            alt={work.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* 标题 */}
        <h1 className="text-4xl font-semibold tracking-tight">{work.title}</h1>
        {work.summary && (
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">{work.summary}</p>
        )}

        {/* 元信息 */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm border-t border-b border-zinc-100 py-6">
          {work.year && (
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Year</p>
              <p>{work.year}</p>
            </div>
          )}
          {work.client && (
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Client</p>
              <p>{work.client}</p>
            </div>
          )}
          {work.role && (
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Role</p>
              <p>{work.role}</p>
            </div>
          )}
          {work.tools.length > 0 && (
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Tools</p>
              <p>{work.tools.join(" / ")}</p>
            </div>
          )}
          {work.medium.length > 0 && (
            <div>
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Medium</p>
              <p>{work.medium.join(" / ")}</p>
            </div>
          )}
        </div>

        {/* Case Study 四段式 */}
        <div className="mt-16 space-y-16">
          {SECTIONS.map(({ key, label }) => {
            const content = work[key];
            if (!content) return null;
            return (
              <section key={key}>
                <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
                  {label}
                </h2>
                <p className="text-base leading-8 text-zinc-700 whitespace-pre-wrap">
                  {content}
                </p>
              </section>
            );
          })}
        </div>

        {/* 媒体画廊 */}
        <MediaGallery urls={work.mediaUrls} />

        {/* External Link */}
        {work.externalLink && (
          <div className="mt-12">
            <a
              href={work.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-900 text-sm hover:bg-zinc-900 hover:text-white transition-colors"
            >
              查看项目 ↗
            </a>
          </div>
        )}
      </article>

      {/* 上一个 / 下一个 */}
      <nav className="border-t border-zinc-100 max-w-3xl mx-auto px-6 py-12 flex justify-between text-sm">
        {prev ? (
          <Link href={`/works/${prev.slug}`} className="group">
            <p className="text-zinc-400 text-xs mb-1">← 上一个</p>
            <p className="group-hover:text-zinc-400 transition-colors">{prev.title}</p>
          </Link>
        ) : (
          <div />
        )}
        <Link href="/works" className="text-zinc-400 hover:text-zinc-900 transition-colors self-center">
          所有作品
        </Link>
        {next ? (
          <Link href={`/works/${next.slug}`} className="group text-right">
            <p className="text-zinc-400 text-xs mb-1">下一个 →</p>
            <p className="group-hover:text-zinc-400 transition-colors">{next.title}</p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </main>
  );
}
