import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import scrollimg from "../media/scroll-down.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const initAnimation = () => {
      if (textRef.current) {
        let text = new SplitType(textRef.current, {
          types: "lines,words,chars",
        });

        const chars = text.chars;
        gsap.set(chars, { opacity: 0, y: 50 });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 1,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("load", initAnimation);

    return () => {
      window.removeEventListener("load", initAnimation);
    };
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="p-1 font-bold sm:text-7xl text-5xl">
          <span>Hi, my name is </span>
          <span className="text-cyan-700">Daniel Lucio!</span>
        </h1>
        <p
          className="font-bold sm:text-4xl text text-3xl mt-2"
          id="text"
          ref={textRef}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <span className="text-cyan-700">Backend</span> Developer and{" "}
          <span className="text-cyan-700">Software</span> Engineer.
        </p>
        <p className="p-10 sm:text-2xl text-xl">
          If you are in troubles, I can help you!
        </p>
        <ScrollLink
          to="contact"
          onClick={scrollToTop}
          className="bg-cyan-500 text-white hover:bg-cyan-600 font-bold py-2 px-4 rounded-full active:bg-cyan-700 text-lg cursor-pointer"
          smooth={true}
          duration={500}
          offset={-100}
        >
          Contact me
        </ScrollLink>
        <div className="h-full flex flex-col items-center justify-center mt-16">
          <img
            src={scrollimg}
            className="w-8 mx-auto animate-bounce"
            alt="Scroll Down Indicator"
          />
        </div>
      </div>
    </section>
  );
}
