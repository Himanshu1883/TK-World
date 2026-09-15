"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";
import { site } from "@/lib/content";

const interests = [
  "Supplier",
  "Commercial Partner",
  "Strategic Opportunity",
  "General Enquiry",
] as const;

const field =
  "w-full rounded-sm border border-white/15 bg-white/[0.04] px-3.5 py-3 text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-gold";

export function EnquiryModal() {
  const { open, closeEnquiry } = useEnquiry();
  const titleId = useId();
  const firstRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiry();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeEnquiry]);

  useEffect(() => {
    if (!open) setStatus("idle");
  }, [open]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Nature of enquiry: ${interest}`,
      "",
      message,
    ].filter(Boolean);

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${name} — ${interest}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
    setStatus("sent");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={closeEnquiry}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden border border-white/10 bg-[#10151f] shadow-lift sm:max-h-[88vh]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="eyebrow">Get in Touch</p>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-[1.55rem] font-medium text-white sm:text-[1.75rem]"
                >
                  Make an Enquiry
                </h2>
              </div>
              <button
                type="button"
                onClick={closeEnquiry}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6" data-lenis-prevent>
              {status === "sent" ? (
                <div className="py-6">
                  <span className="h-px w-10 bg-red" aria-hidden />
                  <p className="mt-5 font-display text-2xl text-white">
                    Thank you.
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">
                    Your enquiry is ready to send. If your mail application did
                    not open, please write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-gold underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={closeEnquiry}
                    className="btn-gold mt-8"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <p className="text-[13.5px] leading-relaxed text-white/65">
                    Suppliers, commercial partners and businesses are welcome to
                    explore strategic opportunities with the Group.
                  </p>

                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Full name
                    </span>
                    <input
                      ref={firstRef}
                      name="name"
                      required
                      autoComplete="name"
                      className={field}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Organisation
                    </span>
                    <input
                      name="organisation"
                      required
                      autoComplete="organization"
                      className={field}
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                        Email
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={field}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                        Phone
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={field}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Nature of enquiry
                    </span>
                    <select
                      name="interest"
                      required
                      defaultValue=""
                      className={`${field} appearance-none`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {interests.map((item) => (
                        <option key={item} value={item} className="bg-[#10151f] text-white">
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                      Message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className={`${field} resize-y min-h-[6.5rem]`}
                    />
                  </label>

                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    Send Enquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
