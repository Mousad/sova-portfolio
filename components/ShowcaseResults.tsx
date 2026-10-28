
"use client";

import { useEffect, useState } from "react";

const designs = [
  {
    name: "Museum of Money",
    category: "Cultural",
    image: "https://cdn.lapa.ninja/assets/images/1x/museumofmoney-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Paperclip",
    category: "Digital Product",
    image: "https://cdn.lapa.ninja/assets/images/1x/paperclip-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Relace",
    category: "Technology",
    image: "https://cdn.lapa.ninja/assets/images/1x/relace-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Isa de Burgh",
    category: "Personal Brand",
    image: "https://cdn.lapa.ninja/assets/images/1x/isadeburgh-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Flim",
    category: "Creative",
    image: "https://cdn.lapa.ninja/assets/images/1x/flim-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Owo",
    category: "Minimal",
    image: "https://cdn.lapa.ninja/assets/images/1x/owo-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Column",
    category: "Agency",
    image: "https://cdn.lapa.ninja/assets/images/1x/column-2-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Askape",
    category: "Studio",
    image: "https://cdn.lapa.ninja/assets/images/1x/askape-thumb.jpg",
    fallback:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80",
  },
];

const collections = [
  {
    query: "minimal design",
    designs: [
      designs[0], designs[1], designs[2], designs[3],
      designs[4], designs[5], designs[6], designs[7],
    ],
  },
  {
    query: "creative portfolio",
    designs: [
      designs[4], designs[2], designs[7], designs[0],
      designs[5], designs[3], designs[1], designs[6],
    ],
  },
  {
    query: "premium website",
    designs: [
      designs[6], designs[3], designs[1], designs[5],
      designs[7], designs[2], designs[0], designs[4],
    ],
  },
];

export default function ShowcaseResults() {
  const [collectionIndex, setCollectionIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">(
    "typing"
  );
  const [showResults, setShowResults] = useState(false);

  // Track failed original images and failed fallback images.
  const [fallbackImages, setFallbackImages] = useState<string[]>([]);
  const [unavailableImages, setUnavailableImages] = useState<string[]>([]);

  const collection = collections[collectionIndex];

  useEffect(() => {
    const phrase = collection.query;

    let delay = phase === "deleting" ? 28 : 72;

    if (phase === "typing" && text === phrase) delay = 100;
    if (phase === "pause") delay = 1850;
    if (phase === "deleting" && text === "") delay = 250;

    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        if (text === phrase) {
          setPhase("pause");
          setShowResults(true);
        } else {
          setText(phrase.slice(0, text.length + 1));
        }
      } else if (phase === "pause") {
        setShowResults(false);
        setPhase("deleting");
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setCollectionIndex((current) => (current + 1) % collections.length);
        setPhase("typing");
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, phase, collection]);

  function handleImageError(
    name: string,
    isFallback: boolean
  ) {
    if (isFallback) {
      setUnavailableImages((current) =>
        current.includes(name) ? current : [...current, name]
      );
    } else {
      setFallbackImages((current) =>
        current.includes(name) ? current : [...current, name]
      );
    }
  }

  return (
    <div className="bg-card p-3 text-card-foreground transition-colors duration-300 sm:p-6">
      {/* Animated search */}
      <div className="search-glow mb-5 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 transition-colors duration-300 sm:px-5 sm:py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-[#8D9B83]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <span
          className="flex min-h-5 min-w-0 flex-1 items-center font-mono text-xs tracking-tight text-foreground sm:text-sm"
          aria-label={text}
        >
          <span className="truncate">{text}</span>
          <span className="search-cursor ml-0.5 inline-block h-4 w-px shrink-0 translate-y-0.5 bg-[#8D9B83]" />
        </span>

        <span className="flex shrink-0 items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#8D9B83] sm:text-[10px]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#9ba58a] opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#8D9B83]" />
          </span>
          Curated
        </span>
      </div>

      {/* Results */}
      <div
        className={`transition-all duration-500 ease-out ${
          showResults
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-hidden={!showResults}
      >
        <div
          key={collectionIndex}
          className="grid grid-cols-4 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {collection.designs.map((design, index) => {
            const useFallback = fallbackImages.includes(design.name);
            const imageUnavailable = unavailableImages.includes(design.name);

            return (
              <article
                key={`${collectionIndex}-${design.name}`}
                className="design-card group min-w-0 overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/6] overflow-hidden bg-secondary">
                  {!imageUnavailable ? (
                    <img
                      src={useFallback ? design.fallback : design.image}
                      alt={`${design.name} — ${design.category} website design`}
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        handleImageError(design.name, useFallback)
                      }
                      className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e9e8df] via-[#d9dfd1] to-[#b7c2ad] p-3 text-center dark:from-[#292c27] dark:via-[#343a30] dark:to-[#485142]">
                      <span className="text-2xl text-[#65745b] dark:text-[#c0cdb5]">
                        ✳
                      </span>
                      <span className="text-xs font-medium text-[#394434] dark:text-[#e0e6da]">
                        {design.name}
                      </span>
                      <span className="text-[10px] text-[#56624f] dark:text-[#b6c0ac]">
                        {design.category}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Results status */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4 transition-colors duration-300">
        <p className="text-[10px] text-muted-foreground sm:text-xs">
          A collection of visual ideas
        </p>

        <div className="flex items-center gap-2 text-[10px] text-[#8D9B83] sm:text-xs">
          <span className="size-1.5 rounded-full bg-[#8D9B83]" />
          <span>
            {showResults ? collection.designs.length : 0} selected references
          </span>
        </div>
      </div>
    </div>
  );
}
