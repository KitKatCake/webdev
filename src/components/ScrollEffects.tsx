"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const heroBg = document.getElementById("heroBg");
    if (heroBg) {
      const onScroll = () => {
        const offset = window.scrollY * 0.3;
        heroBg.style.transform = `translateY(${offset}px)`;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu?.classList.contains("active")) {
          (document.querySelector(".overlay") as HTMLElement)?.click();
        }
      }
    };
    document.addEventListener("keydown", escHandler);

    return () => {
      window.removeEventListener("scroll", () => {});
      observer.disconnect();
      document.removeEventListener("keydown", escHandler);
    };
  }, []);

  return null;
}
