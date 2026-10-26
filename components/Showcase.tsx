
import ShowcaseResults from "@/components/ShowcaseResults";

export default function DesignInspirationShowcase() {
  return (
    <section
      dir="ltr"
      className="overflow-hidden bg-[#fefefe] px-4 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <div dir="rtl" className="mb-10 text-center sm:mb-14">
          <p className="mb-4 text-[10px] tracking-[0.24em] text-[#737c60]">
            THE CREATIVE INDEX
          </p>

          <h2 className="text-3xl font-light tracking-[-0.045em] text-[#191919] sm:text-5xl">
            أفكار تلهم ما نصنعه.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#777770] sm:text-base">
            مساحة بصرية لاستكشاف التصاميم والواجهات والتفاصيل
            التي تجعل التجارب الرقمية أكثر تميزًا.
          </p>
        </div>

        <div className="inspiration-shell overflow-hidden rounded-2xl border border-[#deded8] bg-[#f8f8f4] shadow-[0_24px_80px_-36px_rgba(25,25,25,0.22)]">
          <div className="flex items-center justify-between border-b border-[#e5e5de] px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#e7a39a]" />
                <span className="size-2.5 rounded-full bg-[#e5c782]" />
                <span className="size-2.5 rounded-full bg-[#9cad8b]" />
              </div>

              <span className="ml-1 text-[11px] text-[#8b8b84] sm:text-xs">
                sova.studio / inspiration
              </span>
            </div>

            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-[#d9d9d0]" />
              <span className="size-1.5 rounded-full bg-[#737c60]" />
              <span className="size-1.5 rounded-full bg-[#d9d9d0]" />
            </div>
          </div>

          <ShowcaseResults />
        </div>

        <div
          dir="rtl"
          className="mt-6 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-[#d9d9d0]" />

          <p className="text-[10px] tracking-wide text-[#898a80] sm:text-xs">
            الإلهام بداية كل تجربة استثنائية.
          </p>

          <span className="h-px w-8 bg-[#d9d9d0]" />
        </div>
      </div>
    </section>
  );
}
