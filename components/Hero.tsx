export default function Hero() {
  return (
    <section className="bg-[#c8102e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-red-200 mb-3">
            Locally Owned &amp; Operated
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Dependable Printing and Shipping Solutions
          </h1>
          <p className="text-lg text-red-100 mb-8">
            Bring us your big idea and let us do the rest. Design. Print. Inspire.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:fl178@postnet.com"
              className="bg-white text-[#c8102e] font-semibold px-6 py-3 rounded hover:bg-red-50 transition-colors"
            >
              Get a Print Quote
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6421+N.+Florida+Ave+Ste+D,+Tampa,+FL+33604"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#c8102e] transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
