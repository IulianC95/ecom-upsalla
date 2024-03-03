'use client';

import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

export default function ContactPage() {
  const [animationData, setAnimationData] = useState(null);
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData, // Asigură-te că animationData este importat corect
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const loadAnimationData = async () => {
      const response = await fetch('/animations/animationData.json');
      const data = await response.json();
      setAnimationData(data);
    };

    loadAnimationData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimationActive(true);
    // Logică suplimentară pentru trimiterea formularului
  };
  return (
    <section className="container px-4 mx-auto w-full mt-10 flex flex-col lg:flex-row justify-start items-start text-black gap-10">
      <div className="lg:w-1/2 flex flex-col justify-start gap-4">
        <h1 className="uppercase text-3xl text-black font-semibold text-center lg:text-start">
          Contact Info
        </h1>

        <p className="">
          Contacting our team is a simple and efficient process, ensuring that
          your questions and concerns are addressed as quickly as possible. You
          can reach out to us through various methods, including email, phone,
          or via our online form. Regardless of the method chosen, our support
          team is ready to provide you with the necessary information and assist
          with any requests. We ensure the confidentiality and security of your
          personal data in all interactions. For immediate assistance, we
          recommend consulting the frequently asked questions section on our
          website.
        </p>

        <p>
          <span className="font-semibold">Address: </span>
          123 Maple Street Springfield, ST 98765 United States
        </p>

        <a href="tel:+44987065901">
          <span className="font-semibold">Phone:</span> +44 987 065 091
        </a>

        <a href="mailto:example@example.com">
          <span className="font-semibold">Email: </span>info@example.com
        </a>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col justify-between gap-4">
        <h2 className="uppercase text-3xl text-black font-semibold text-center lg:text-start">
          Contact Form
        </h2>
        {!isAnimationActive ? ( // Afișează formularul numai dacă animația nu este activă
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex gap-10 flex-col lg:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-black rounded h-10 pl-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-black rounded h-10 pl-2 w-full"
              />
            </div>

            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full border border-black pl-2 h-10"
              />
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your message"
                className="border border-black w-full pl-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-600 transition-colors p-2"
            >
              Send
            </button>
          </form>
        ) : (
          <Lottie options={defaultOptions} className="w-full" />
        )}
      </div>
    </section>
  );
}
