import type { Metadata } from "next";

export const metadata: Metadata = { title: "联系我" };

const SOCIALS = [
  { label: "Email", href: "mailto:hello@dingyunguang.com", display: "hello@dingyunguang.com" },
  { label: "Instagram", href: "#", display: "@dingyunguang" },
  { label: "Behance", href: "#", display: "behance.net/dingyunguang" },
  { label: "WeChat", href: "#", display: "[微信号]" },
];

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <p className="text-xs uppercase tracking-widest text-zinc-400 mb-12">Contact</p>

      <h1 className="text-4xl font-semibold tracking-tight">有想法？一起聊聊。</h1>
      <p className="mt-6 text-base text-zinc-500 leading-relaxed max-w-md">
        我目前接受品牌视觉、3D 动画、商业摄影等方向的合作委托，
        也欢迎有趣的跨界项目。
      </p>

      <div className="mt-16 space-y-6">
        {SOCIALS.map(({ label, href, display }) => (
          <div key={label} className="flex items-center gap-8 border-b border-zinc-100 pb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 w-24 shrink-0">{label}</p>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {display}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
