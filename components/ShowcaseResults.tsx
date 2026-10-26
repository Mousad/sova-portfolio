
"use client";

import { useEffect, useState } from "react";


const designs = [
  {
    name: "Museum of Money",
    category: "Cultural",
    image: "https://cdn.lapa.ninja/assets/images/1x/museumofmoney-thumb.jpg",
  },
  {
    name: "Paperclip",
    category: "Digital Product",
    image: "https://cdn.lapa.ninja/assets/images/1x/paperclip-thumb.jpg",
  },
  {
    name: "Relace",
    category: "Technology",
    image: "https://cdn.lapa.ninja/assets/images/1x/relace-thumb.jpg",
  },
  {
    name: "Isa de Burgh",
    category: "Personal Brand",
    image: "https://cdn.lapa.ninja/assets/images/1x/isadeburgh-thumb.jpg",
  },
  {
    name: "Flim",
    category: "Creative",
    image: "https://cdn.lapa.ninja/assets/images/1x/flim-thumb.jpg",
  },
  {
    name: "Owo",
    category: "Minimal",
    image: "https://cdn.lapa.ninja/assets/images/1x/owo-thumb.jpg",
  },
  {
    name: "Column",
    category: "Agency",
    image: "https://cdn.lapa.ninja/assets/images/1x/column-2-thumb.jpg",
  },
  {
    name: "Askape",
    category: "Studio",
    image: "https://cdn.lapa.ninja/assets/images/1x/askape-thumb.jpg",
  },
];

const collections = [
  {
    query: "minimal  design",
    designs: [
      designs[0],
      designs[1],
      designs[2],
      designs[3],
      designs[4],
      designs[5],
      designs[6],
      designs[7],
    ],
  },
  {
    query: "creative portfolio",
    designs: [
      designs[4],
      designs[2],
      designs[7],
      designs[0],
      designs[5],
      designs[3],
      designs[1],
      designs[6],
    ],
  },
  {
    query: "premium website ",
    designs: [
      designs[6],
      designs[3],
      designs[1],
      designs[5],
      designs[7],
      designs[2],
      designs[0],
      designs[4],
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

  const collection = collections[collectionIndex];

  useEffect(() => {
    const phrase = collection.query;

    let delay = phase === "deleting" ? 28 : 72;

    if (phase === "typing" && text === phrase) {
      delay = 100;
    }

    if (phase === "pause") {
      delay = 1850;
    }

    if (phase === "deleting" && text === "") {
      delay = 250;
    }

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
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setCollectionIndex((current) => (current + 1) % collections.length);
          setPhase("typing");
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, phase, collection]);

  return (
    <div className="p-3 sm:p-6">
      {/* Animated search */}
      <div className="search-glow mb-5 flex items-center gap-3 rounded-xl border border-[#dfe3d5] bg-white px-4 py-3.5 sm:px-5 sm:py-4">
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
          className="shrink-0 text-[#737c60]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <span
          className="flex min-h-5 min-w-0 flex-1 items-center font-mono text-xs tracking-tight text-[#36372f] sm:text-sm"
          aria-label={text}
        >
          <span className="truncate">{text}</span>
          <span className="search-cursor ml-0.5 inline-block h-4 w-px shrink-0 translate-y-0.5 bg-[#737c60]" />
        </span>

        <span className="flex shrink-0 items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#737c60] sm:text-[10px]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#9ba58a] opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[#737c60]" />
          </span>
          Curated
        </span>
      </div>

      {/* Results transition */}
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
          {collection.designs.map((design, index) => (
            <article
              key={`${collectionIndex}-${design.name}`}
              className="design-card group min-w-0 overflow-hidden rounded-xl border border-[#e9e9e1] bg-white"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative aspect-[3/6] overflow-hidden bg-[#eeeee8]">
                <img
                  src={design.image}
                  alt={`${design.name} — ${design.category} website design`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                

                
              </div>

             
            </article>
          ))}
        </div>
      </div>

      {/* Results status */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e5e5de] pt-4">
        <p className="text-[10px] text-[#777970] sm:text-xs">
          A collection of visual ideas
        </p>

        <div className="flex items-center gap-2 text-[10px] text-[#737c60] sm:text-xs">
          <span className="size-1.5 rounded-full bg-[#737c60]" />
          <span>
            {showResults ? collection.designs.length : 0} selected references
          </span>
        </div>
      </div>
    </div>
  );
}
