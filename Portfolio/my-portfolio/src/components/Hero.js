import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center flex-col bg-gradient-to-br from-blue-100 to-blue-300 text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Nimra 👋</h2>
      <p className="text-xl md:text-2xl text-gray-700">A Software Engineer & Digital Marketer</p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
