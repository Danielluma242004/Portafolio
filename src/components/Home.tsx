export function Home() {
  return (
    <section className="min-h-screen m-4 flex flex-col justify-center items-center text-center relative">
      <div>
        <h1 className="p-1 font-bold text-7xl">
          <span>Hi, my name is </span>
          <span className="text-cyan-700">Daniel Lucio!</span>
        </h1>
        <p className="font-bold text-4xl">
          <span className="text-cyan-700">Backend</span> Developer and{" "}
          <span className="text-cyan-700">Software</span> Engineer.
        </p>
        <p className="p-10 text-2xl">If you are in troubles, I can help you!</p>
        <button className="bg-cyan-500 text-white hover:bg-cyan-600 font-bold py-2 px-4 rounded-full active:bg-cyan-700 text-lg">
          Contact me
        </button>
      </div>
      <svg
        viewBox="0 0 79.37 122.88"
        className="w-8 mx-auto absolute bottom-0 mb-8 animate-bounce"
      >
        <g>
          <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" />
        </g>
      </svg>
    </section>
  );
}
