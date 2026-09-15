import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0a0a0b]">
      <div className="px-6 text-center">
        <Image
          src="/logo-tk.png"
          alt="TK World Investment Group"
          width={420}
          height={120}
          priority
          className="mx-auto h-20 w-auto object-contain sm:h-24"
        />
        <div className="mx-auto mt-8 h-px w-20 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-pulse bg-[#c9a24b]" />
        </div>
      </div>
    </div>
  );
}
