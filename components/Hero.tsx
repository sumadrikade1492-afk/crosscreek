export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#3FA9F5] via-[#1E5AA8] to-[#0B2A4A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
            Locally Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Dependable Printing and Shipping Solutions
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Bring us your big idea and let us do the rest. Design. Print. Inspire.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:fl178@postnet.com"
              className="bg-[#1E5AA8] text-white font-semibold px-6 py-3 rounded hover:bg-[#0B2A4A] transition-colors"
            >
              Get a Print Quote
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=10861+Cross+Creek+Blvd,+Tampa,+FL+33647"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white bg-transparent text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#0B2A4A] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
