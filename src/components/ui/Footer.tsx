export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs font-mono text-white/20 tracking-widest">
          © {new Date().getFullYear()} DYG — ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-6">
          {[
            { label: "INS", href: "#" },
            { label: "BHN", href: "#" },
            { label: "MAIL", href: "mailto:hello@dingyunguang.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-mono tracking-widest text-white/20 hover:text-[#00F0FF] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
