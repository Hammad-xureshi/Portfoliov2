const DEFAULT_OFFSET = 88;

/**
 * Smooth-scroll to an element, preferring the active Lenis instance so
 * anchor navigation stays consistent with the app's smooth scrolling.
 * Falls back to native smooth scrolling when Lenis is not mounted.
 */
export function scrollToElement(target, options = {}) {
  const el =
    typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  const lenis = typeof window !== "undefined" ? window.__lenis : null;
  const offset =
    typeof options.offset === "number" ? options.offset : DEFAULT_OFFSET;

  if (lenis) {
    lenis.scrollTo(el, {
      offset,
      duration: 0.45,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  const lenis = typeof window !== "undefined" ? window.__lenis : null;
  if (lenis) {
    lenis.scrollTo(0, { duration: 0.45 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}