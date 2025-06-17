import { useRef, useEffect } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const flairRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // só ativa no desktop (Tailwind md: 768px+)

    if (flairRef.current) {
      xTo.current = gsap.quickTo(flairRef.current, "x", {
        duration: 0.6,
        ease: "power3.out",
      });
      yTo.current = gsap.quickTo(flairRef.current, "y", {
        duration: 0.6,
        ease: "power3.out",
      });
    }

    const move = (e) => {
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX);
        yTo.current(e.clientY);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={flairRef}
      className="flair hidden md:block fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mix-blend-difference pointer-events-none z-[999]"
    ></div>
  );
};

export default MouseFollower;
