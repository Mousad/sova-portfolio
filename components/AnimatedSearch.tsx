
"use client";

import { useEffect, useState } from "react";

const phrases = [
  "minimal digital design",
  "creative portfolio",
  "premium website inspiration",
  "modern UI design",
];

export default function AnimatedSearch() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    let delay = deleting ? 35 : 75;

    if (!deleting && text === phrase) {
      delay = 1700;
    } else if (deleting && text === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else if (deleting) {
        setText(phrase.slice(0, text.length - 1));
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="inline-flex min-w-0 items-center gap-1">
      <span className="truncate">{text}</span>
      <span
        aria-hidden="true"
        className="h-5 w-px shrink-0 bg-[#737c60] animate-pulse"
      />
    </span>
  );
}
