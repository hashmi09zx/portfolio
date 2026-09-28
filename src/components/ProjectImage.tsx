"use client";

import React, { useState, useEffect, useRef } from "react";

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  slug?: string;
  className?: string;
}

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg"];

export default function ProjectImage({ src, alt, slug, className, ...props }: ProjectImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const candidatesRef = useRef<string[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const list: string[] = [src];

    const lastDotPos = src.lastIndexOf(".");
    const basePath = lastDotPos !== -1 ? src.substring(0, lastDotPos) : src;

    EXTENSIONS.forEach((ext) => {
      const path = `${basePath}${ext}`;
      if (!list.includes(path)) list.push(path);
    });

    if (slug) {
      EXTENSIONS.forEach((ext) => {
        const slugPath = `/images/${slug}${ext}`;
        if (!list.includes(slugPath)) list.push(slugPath);
      });
    }

    candidatesRef.current = list;
    indexRef.current = 0;
    setCurrentSrc(src);
  }, [src, slug]);

  const handleError = () => {
    const nextIndex = indexRef.current + 1;
    if (nextIndex < candidatesRef.current.length) {
      indexRef.current = nextIndex;
      setCurrentSrc(candidatesRef.current[nextIndex]);
    }
  };

  return (
    <img
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  );
}
