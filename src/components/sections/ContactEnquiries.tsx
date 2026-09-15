import { contact } from "@/lib/content";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/ui/Reveal";

export function ContactEnquiries() {
  const { enquiries } = contact;

  return (
    <section className="band-paper py-20 lg:py-28">
      <div className="shell">
        <FadeUp className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-red" aria-hidden />
            <p className="eyebrow">{enquiries.eyebrow}</p>
          </div>
          <h2 className="mt-6 font-display text-section font-medium text-foreground">
            {enquiries.title}
          </h2>
        </FadeUp>

        <StaggerChildren
          className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3 lg:mt-16"
          stagger={0.08}
        >
          {enquiries.items.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <article className="group flex h-full flex-col bg-surface p-7 lg:p-9">
                <span className="font-display text-[13px] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[19px] font-medium leading-snug text-foreground lg:text-[21px]">
                  {item.title}
                </h3>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <span
                  className="mt-6 h-px w-8 bg-red transition-all duration-500 ease-expo group-hover:w-14"
                  aria-hidden
                />
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
