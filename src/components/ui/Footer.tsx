export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] px-8 py-10 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs tracking-[0.15em] uppercase font-light text-[#BBBBBB]">
          © {new Date().getFullYear()} 丁韵光
        </p>
        <div className="flex gap-8">
          {[
            { label: "Instagram", href: "#" },
            { label: "Behance", href: "#" },
            { label: "Email", href: "mailto:hello@dingyunguang.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-[0.15em] uppercase font-light text-[#BBBBBB] hover:text-[#111111] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
