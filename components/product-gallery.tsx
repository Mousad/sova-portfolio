
"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const selectedImage = images[activeImage] ?? images[0];

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f0efe8]">
        <Image
          src={selectedImage}
          alt={`${title} - معاينة`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition-opacity duration-300"
        />
        <span className="absolute bottom-4 left-4 bg-[#f8f7f2]/90 px-3 py-2 text-[10px] text-[#4b4d42] backdrop-blur-sm">
          معاينة المنتج
        </span>
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`عرض الصورة ${index + 1}`}
              aria-pressed={activeImage === index}
              className={`relative aspect-square overflow-hidden bg-[#f0efe8] ${
                activeImage === index
                  ? "ring-1 ring-inset ring-[#737c60]"
                  : "opacity-70 transition-opacity hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - صورة ${index + 1}`}
                fill
                sizes="160px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
