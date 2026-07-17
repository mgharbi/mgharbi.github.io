"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Gallery, GalleryImage } from "./galleries";

const THUMB_WIDTH = 300;
const GAP = 10;

// Row-major masonry, like the original: each image goes into the currently
// shortest column, so the sequence reads left-to-right.
function packColumns(images: GalleryImage[], columnCount: number) {
  const columns: { img: GalleryImage; index: number }[][] = Array.from(
    { length: columnCount },
    () => []
  );
  const heights = new Array(columnCount).fill(0);
  images.forEach((img, index) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push({ img, index });
    heights[shortest] += img.height / img.width;
  });
  return columns;
}

export default function GalleryViewer({ gallery }: { gallery: Gallery }) {
  const [index, setIndex] = useState(0);
  const [showThumbs, setShowThumbs] = useState(true);
  const [columnCount, setColumnCount] = useState(3);
  const gridRef = useRef<HTMLDivElement>(null);

  const count = gallery.images.length;
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setShowThumbs(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setColumnCount(Math.max(2, Math.floor((width + GAP) / (THUMB_WIDTH + GAP))));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [showThumbs]);

  const image = gallery.images[index];

  if (showThumbs) {
    const columns = packColumns(gallery.images, columnCount);
    return (
      <div ref={gridRef} className="flex" style={{ gap: GAP }}>
        {columns.map((column, c) => (
          <div key={c} className="flex flex-1 flex-col" style={{ gap: GAP }}>
            {column.map(({ img, index: i }) => (
              <button
                key={img.thumb}
                onClick={() => {
                  setIndex(i);
                  setShowThumbs(false);
                }}
                className="block w-full bg-[rgba(175,175,175,0.1)] cursor-pointer"
              >
                <Image
                  src={img.thumb}
                  alt=""
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 50vw, 300px"
                  className="w-full h-auto hover:opacity-90"
                />
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={next}
        className="cursor-pointer self-start"
        title="Next image"
      >
        <Image
          key={image.src}
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          priority
          className="max-h-[calc(100vh-160px)] w-auto"
        />
      </button>
      <div className="pt-4 text-[13px] text-[#aaa] select-none">
        <span>
          <button onClick={prev} className="text-[#222] hover:text-black">prev</button>
          {" / "}
          <button onClick={next} className="text-[#222] hover:text-black">next</button>
        </span>
        <button
          onClick={() => setShowThumbs(true)}
          className="block mt-[15px] text-xs uppercase tracking-[0.04em] text-[#aaa] hover:text-[#222]"
        >
          Show Thumbnails
        </button>
      </div>
    </div>
  );
}
