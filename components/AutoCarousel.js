"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Full-bleed-style spotlight: auto-advances on a timer only. No controls, no helper copy.
 * Swipe still changes slides on touch. Screen readers get a polite live region.
 */
export default function AutoCarousel({ id, title, items, intervalMs = 5400, className = "" }) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const clear = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const go = useCallback(
    (i) => {
      setIndex(((i % items.length) + items.length) % items.length);
    },
    [items.length]
  );

  const tick = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion || items.length < 2) {
      clear();
      return;
    }
    clear();
    timerRef.current = window.setInterval(tick, intervalMs);
    return clear;
  }, [clear, intervalMs, items.length, reducedMotion, tick]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end == null) return;
    const dx = end - start;
    if (dx > 56) go(index - 1);
    else if (dx < -56) go(index + 1);
  };

  return (
    <section
      id={id}
      className={`border-b border-neutral-200 bg-gradient-to-b from-brand-surface to-white py-12 sm:py-14 ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {items[index]?.heading ?? ""}
      </p>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 id={`${id}-heading`} className="ethos-section-title">
            {title}
          </h2>
          <span className="ethos-section-rule mt-4 block h-1 w-16 rounded-full sm:w-24" aria-hidden />
        </div>

        <div
          className="relative mt-8 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-md ring-1 ring-neutral-100"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, i) => (
              <article
                key={item.key}
                className="w-full shrink-0"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
                aria-hidden={i !== index}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] min-h-[200px] lg:aspect-auto lg:min-h-[min(100%,22rem)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      priority={i === 0}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent lg:bg-gradient-to-r lg:from-black/25 lg:via-transparent lg:to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:pl-12 lg:pr-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{item.kicker}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                      {item.heading}
                    </h3>
                    <p className="mt-4 ethos-prose">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
