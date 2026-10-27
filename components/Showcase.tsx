
import ShowcaseResults from "@/components/ShowcaseResults";

export default function DesignInspirationShowcase() {
  return (
    <section
      dir="ltr"
      className="overflow-hidden bg-background px-4 py-16 text-foreground transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">
        <div dir="rtl" className="mb-10 text-center sm:mb-14">
          <p className="mb-4 text-[10px] tracking-[0.24em] text-[#8D9B83]">
            THE CREATIVE INDEX
          </p>

          <h2 className="text-3xl font-light tracking-[-0.045em] text-foreground sm:text-5xl">
            أفكار تلهم ما نصنعه.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            مساحة بصرية لاستكشاف التصاميم والواجهات والتفاصيل
            التي تجعل التجارب الرقمية أكثر تميزًا.
          </p>
        </div>

        <div className="inspiration-shell overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-36px_rgba(25,25,25,0.22)] transition-colors duration-300">
          {/* Browser Header */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-4 transition-colors duration-300 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#e7a39a]" />
                <span className="size-2.5 rounded-full bg-[#e5c782]" />
                <span className="size-2.5 rounded-full bg-[#9cad8b]" />
              </div>

              <span className="ml-1 text-[11px] text-muted-foreground sm:text-xs">
                sova.studio / inspiration
              </span>
            </div>

            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-border" />
              <span className="size-1.5 rounded-full bg-[#8D9B83]" />
              <span className="size-1.5 rounded-full bg-border" />
            </div>
          </div>

          <ShowcaseResults />
        </div>

        <div
          dir="rtl"
          className="mt-6 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-border" />

          <p className="text-[10px] tracking-wide text-muted-foreground sm:text-xs">
            الإلهام بداية كل تجربة استثنائية.
          </p>

          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </section>
  );
}
