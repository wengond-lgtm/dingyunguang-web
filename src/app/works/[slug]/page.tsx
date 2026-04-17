import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  // Day 4 会接入 getWorkBySlug
  if (!slug) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-zinc-500">Case Study 详情页 —— Day 4 实现（slug: {slug}）</p>
    </main>
  );
}
