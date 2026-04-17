import type { Metadata } from "next";

export const metadata: Metadata = { title: "关于我" };

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-12">About</p>

      {/* 开场白 */}
      <section>
        <p className="text-3xl font-light leading-relaxed text-zinc-800">
          [你的一句开场白，例如：我是丁韵光，一名视觉设计师，生活在______，用图像讲故事。]
        </p>
      </section>

      {/* 专业背景 */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">Background</p>
        <p className="text-base leading-8 text-zinc-600">
          [你的专业背景，把经历写成段落而不是列表。例如：毕业于______，之后在______做过______，
          逐渐形成了自己对视觉语言的理解……]
        </p>
      </section>

      {/* 工作方式 */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">How I Work</p>
        <p className="text-base leading-8 text-zinc-600">
          [你的工作方式和思考习惯。例如：我倾向于在理解问题的本质之前不急于动手，
          相信好的设计来自对用户和场景的深入观察……]
        </p>
      </section>

      {/* 能力范围 */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6">Skills & Tools</p>
        <div className="flex flex-wrap gap-2">
          {[
            "3D Animation", "3D Render", "Motion Design",
            "Brand Identity", "Visual Design", "Web Design",
            "Cinema 4D", "Blender", "After Effects",
            "Photoshop", "Figma", "Lightroom",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 border border-zinc-200 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 结尾 */}
      <section className="mt-20 pt-12 border-t border-zinc-100">
        <p className="text-lg text-zinc-600 leading-relaxed">
          [结尾邀请合作的一句话，例如：如果你有有趣的项目想聊聊，随时欢迎联系。]
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block text-sm text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4"
        >
          联系我 →
        </a>
      </section>
    </main>
  );
}
