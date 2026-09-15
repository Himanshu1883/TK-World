"use client";

import {
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

const interests = [
  "Supplier",
  "Commercial Partner",
  "Strategic Opportunity",
  "General Enquiry",
] as const;

type Interest = (typeof interests)[number] | "";

const field =
  "w-full border border-white/12 bg-white/[0.035] px-4 py-2.5 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-gold focus:bg-white/[0.05]";

const label =
  "mb-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold/80";

export function EnquiryModal() {
  const { open, closeEnquiry } = useEnquiry();
  const titleId = useId();
  const firstRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [interest, setInterest] = useState<Interest>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstRef.current?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        return;
      }
      closeEnquiry();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeEnquiry, menuOpen]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setInterest("");
      setMenuOpen(false);
    }
  }, [open]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!interest) return;

    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
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
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-ink/85 backdrop-blur-md"
            onClick={closeEnquiry}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[42rem] border border-white/10 bg-[#0e131c] shadow-lift"
          >
            <div className="h-px w-full bg-gold-hairline" />

            <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-5 sm:px-8 sm:pt-6">
              <div>
                <p className="eyebrow">Get in Touch</p>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-[1.7rem] font-medium leading-tight text-white sm:text-[2rem]"
                >
                  Make an Enquiry
                </h2>
              </div>
              <button
                type="button"
                onClick={closeEnquiry}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center border border-white/12 text-white/70 transition hover:border-gold hover:text-gold"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              {status === "sent" ? (
                <div className="pt-2">
                  <span className="block h-px w-10 bg-red" aria-hidden />
                  <p className="mt-5 font-display text-2xl text-white">Thank you.</p>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/70">
                    If your mail application did not open, write to{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-gold underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={closeEnquiry} className="btn-gold mt-7">
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className={label}>Full name</span>
                      <input
                        ref={firstRef}
                        name="name"
                        required
                        autoComplete="name"
                        className={field}
                      />
                    </label>
                    <label className="block min-w-0">
                      <span className={label}>Organisation</span>
                      <input
                        name="organisation"
                        required
                        autoComplete="organization"
                        className={field}
                      />
                    </label>
                    <label className="block min-w-0">
                      <span className={label}>Email</span>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={field}
                      />
                    </label>
                    <label className="block min-w-0">
                      <span className={label}>Phone</span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={field}
                      />
                    </label>
                  </div>

                  <InterestSelect
                    value={interest}
                    open={menuOpen}
                    onOpenChange={setMenuOpen}
                    onChange={setInterest}
                  />

                  <label className="block">
                    <span className={label}>Message</span>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      className={`${field} resize-none leading-relaxed`}
                    />
                  </label>

                  <div className="flex justify-end pt-1">
                    <button type="submit" className="btn-gold">
                      Send Enquiry
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InterestSelect({
  value,
  open,
  onOpenChange,
  onChange,
}: {
  value: Interest;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: Interest) => void;
}) {
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) onOpenChange(false);
    };
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const i = interests.findIndex((item) => item === value);
    setActive(i >= 0 ? i : 0);
  }, [open, value]);

  const onKey = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        onOpenChange(true);
        return;
      }
      setActive((i) => (i + 1) % interests.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        onOpenChange(true);
        return;
      }
      setActive((i) => (i - 1 + interests.length) % interests.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        onOpenChange(true);
        return;
      }
      onChange(interests[active]);
      onOpenChange(false);
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      onOpenChange(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative z-20">
      <span className={label}>Nature of enquiry</span>
      <input type="hidden" name="interest" value={value} required />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => onOpenChange(!open)}
        onKeyDown={onKey}
        className={cn(
          field,
          "flex items-center justify-between gap-3 text-left",
          open && "border-gold bg-white/[0.05]"
        )}
      >
        <span className={cn(value ? "text-white" : "text-white/35")}>
          {value || "Select one"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-gold transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-[calc(100%+6px)] z-30 overflow-hidden border border-gold/25 bg-[#121924] shadow-lift"
          >
            {interests.map((item, i) => {
              const selected = item === value;
              const highlighted = i === active;
              return (
                <li key={item} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => {
                      onChange(item);
                      onOpenChange(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-[14px] transition-colors",
                      highlighted ? "bg-gold/10 text-white" : "text-white/75",
                      selected && "text-gold"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "h-4 w-px",
                          selected || highlighted ? "bg-gold" : "bg-transparent"
                        )}
                        aria-hidden
                      />
                      {item}
                    </span>
                    {selected && <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
