import { useRef } from "react";
import { useInView } from "framer-motion";

export default function InViewCursor({ wrapperClass, cursorClass, ...cursorProps }) {
  const ref = useRef(null);
  useInView(ref, { once: false, amount: 0.05 });

  return <div ref={ref} className={wrapperClass} aria-hidden="true" />;
}