"use client";

import { useLenis } from "lenis/react";

export default function ScrollReset() {
  useLenis((lenis) => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollY = lenis.scroll;

    // If we reach the very bottom of the page (within 2px for subpixel safety)
    // we instantly snap back to the top of the page using Lenis.
    if (Math.ceil(scrollY + winHeight) >= docHeight - 2) {
      lenis.scrollTo(0, { immediate: true });
    }
  });

  return null;
}
