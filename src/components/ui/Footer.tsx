export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} 丁韵光. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Behance</a>
          <a href="mailto:hello@dingyunguang.com" className="hover:text-zinc-900 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
