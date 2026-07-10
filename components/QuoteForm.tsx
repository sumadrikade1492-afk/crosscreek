"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Business Cards",
  details: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          submittedAt: new Date().toISOString(),
          source: "post-and-print-tampa-site",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't send your request right now. Please try again.");
    }
  }

  return (
    <section id="quote" className="bg-[#F5F9FF] py-14 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1E5AA8] mb-3">
            Request a Quote
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2A4A] mb-4">
            Send your print project straight to our team
          </h2>
          <p className="text-gray-600 text-base leading-7 max-w-xl">
            Tell us what you need and we&apos;ll follow up with pricing, timing, and next steps.
            This form now sends directly to our n8n workflow.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-medium text-[#0B2A4A]">
              Name
              <input
                required
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1E5AA8]"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm font-medium text-[#0B2A4A]">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1E5AA8]"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-medium text-[#0B2A4A]">
              Phone
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1E5AA8]"
                placeholder="(813) 555-1234"
              />
            </label>

            <label className="text-sm font-medium text-[#0B2A4A]">
              Service
              <select
                value={form.service}
                onChange={(event) => setForm({ ...form, service: event.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1E5AA8]"
              >
                <option>Business Cards</option>
                <option>Banners & Signs</option>
                <option>Blueprints</option>
                <option>Direct Mail</option>
                <option>Shipping Services</option>
                <option>Mailbox Rental</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label className="text-sm font-medium text-[#0B2A4A] block">
            Project details
            <textarea
              required
              rows={5}
              value={form.details}
              onChange={(event) => setForm({ ...form, details: event.target.value })}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1E5AA8]"
              placeholder="Tell us sizes, quantities, deadlines, or anything else we should know."
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex justify-center rounded-lg bg-[#1E5AA8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B2A4A] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Send Request"}
            </button>

            {status === "success" ? (
              <p className="text-sm font-medium text-green-700">
                Thanks. Your request was sent successfully.
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm font-medium text-red-600">{errorMessage}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
