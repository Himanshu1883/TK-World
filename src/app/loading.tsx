import { BrandWordmark } from "@/components/ui/BrandWordmark";

export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-ink px-6 pt-24">
      <div className="text-center">
        <BrandWordmark size="lg" className="mx-auto" />
        <div className="mx-auto mt-8 h-px w-40 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-gold" />
        </div>
      </div>
    </div>
  );
}
