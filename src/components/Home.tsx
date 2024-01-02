import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
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
      <div className="flex flex-col items-center text-center dark:text-white">
        <h1 className="p-1 font-bold sm:text-7xl text-5xl">
          <span>Hi, my name is </span>
          <span className="text-cyan-700 dark:text-cyan-500">
            Daniel Lucio!
          </span>
        </h1>
        <p
          className="font-bold sm:text-4xl text text-3xl mt-2"
          id="text"
          ref={textRef}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <span className="text-cyan-700 dark:text-cyan-500">Backend</span>{" "}
          Developer and{" "}
          <span className="text-cyan-700 dark:text-cyan-500">Software</span>{" "}
          Engineer.
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
        <div className="mt-5 flex justify-center">
          <a
            href="http://www.linkedin.com/in/daniel-lucio1"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://github.com/Danielluma242004"
            className="text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="h-full flex flex-col items-center justify-center mt-16">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 79.37 122.88"
            className="w-8 mx-auto animate-bounce dark:fill-white"
          >
            <g>
              <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
