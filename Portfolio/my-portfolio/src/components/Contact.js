import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <p className="text-gray-700 mb-4">
          Interested in working together or have a question? Let’s connect!
        </p>
        <a
          href="mailto:nimrazaman675@gmail.com"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
