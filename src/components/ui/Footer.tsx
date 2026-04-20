export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} 丁韵光
        </p>
        <div className="flex gap-6">
          {[
            { label: "Instagram", href: "#" },
            { label: "Behance", href: "#" },
            { label: "Email", href: "mailto:hello@dingyunguang.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-[#FFE600] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
