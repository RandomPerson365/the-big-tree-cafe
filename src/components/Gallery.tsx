"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/images/pizza.png", alt: "Signature Pizza", title: "Authentic Flavors" },
  { src: "/images/drinks.png", alt: "Refreshing Drinks", title: "Crafted Cocktails" },
  { src: "/images/live-music.png", alt: "Live Music", title: "Soulful Evenings" },
  { src: "/images/hero-exterior.png", alt: "Outdoor Seating", title: "Open Air Vibe" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = containerRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(containerRef.current, {
        x: -(scrollWidth - viewportWidth + 100), // Adding some padding
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-charcoal overflow-hidden h-screen flex flex-col justify-center">
      <div className="px-4 md:px-12 mb-12">
        <h2 className="text-4xl md:text-6xl text-cream font-serif">A Glimpse into our World</h2>
      </div>
      
      <div ref={containerRef} className="flex gap-8 px-4 md:px-12 whitespace-nowrap">
        {images.map((img, index) => (
          <div key={index} className="inline-block relative w-[400px] md:w-[600px] aspect-video rounded-xl overflow-hidden group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl text-cream font-serif">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
