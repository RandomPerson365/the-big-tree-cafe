"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Image entrance
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-12 lg:px-24 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={textRef} className="space-y-8">
          <div className="overflow-hidden">
            <h2 className="reveal-text text-4xl md:text-6xl text-sage font-serif leading-tight">
              Where Architecture <br /> Meets Nature
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="reveal-text text-lg text-charcoal/80 leading-relaxed max-w-xl">
              Nestled in the heart of Golf Course Road, The Big Tree Cafe is more 
              than just a dining destination. It's a sanctuary where lush greenery 
              and modern design coexist, creating an atmosphere that breathes 
              tranquility into your day.
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="reveal-text flex gap-8 py-4">
              <div>
                <span className="block text-3xl font-serif text-sage">12+</span>
                <span className="text-sm uppercase tracking-wider text-charcoal/60">Signature Cocktails</span>
              </div>
              <div className="w-[1px] bg-sage/20" />
              <div>
                <span className="block text-3xl font-serif text-sage">Rooftop</span>
                <span className="text-sm uppercase tracking-wider text-charcoal/60">Dining Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/interior-vibe.png"
            alt="Interior Atmosphere"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
