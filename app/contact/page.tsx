import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="bg-gradient-to-r from-[#3FA9F5] via-[#1E5AA8] to-[#0B2A4A] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <p className="text-sm uppercase tracking-widest text-white/80 mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Start your next print or shipping project
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Share your project details and our team will follow up with pricing, timing, and the
            best next step for your order.
          </p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </main>
  );
}
