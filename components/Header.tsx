export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-[#c8102e]">
              Post &amp; Print
            </span>
            <span className="ml-2 text-xs text-gray-500 uppercase tracking-wide hidden sm:inline-block">
              Tampa
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-[#c8102e] transition-colors">
            Services
          </a>
          <a href="#hours" className="hover:text-[#c8102e] transition-colors">
            Hours
          </a>
          <a href="#location" className="hover:text-[#c8102e] transition-colors">
            Location
          </a>
          <a href="#contact" className="hover:text-[#c8102e] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="tel:8134019820"
          className="bg-[#c8102e] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#a50d25] transition-colors"
        >
          (813) 401-9820
        </a>
      </div>
    </header>
  );
}
