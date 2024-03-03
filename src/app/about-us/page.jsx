import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-between gap-10">
      <Image
        src="/images/about-us.webp"
        alt="Empty cart"
        width={1500}
        height={500}
      ></Image>

      <h1 className="text-3xl font-semibold">Welcome to Our World</h1>

      <div className="w-2/3 text-xl flex flex-col gap-8">
        <p>
          We are more than just an e-commerce platform; we are a family
          committed to delivering excellence and joy right to your doorstep.
          Inside our bustling warehouse, every box we pack and every order we
          take is a promise of quality and care.
        </p>
        <hr />
        <p>
          Our team, a vibrant group of dedicated individuals, works tirelessly
          to ensure your shopping experience is seamless and satisfying. From
          the meticulous packers, who wrap your products with precision and
          affection, to the attentive customer service representative stationed
          at their desk, phone in hand, ready to assist you with your queries or
          orders – everyone plays a pivotal role.
        </p>
        <hr />
        <p>
          We take immense pride in the harmony and happiness that permeate our
          workspace. It is not just about fulfilling orders; it is about
          creating connections and building trust with every package we send
          out. This is the heart of a place where passion meets purpose, and
          where your satisfaction is our ultimate reward.
        </p>
        <hr />
        <p>
          Join us on this journey, and let us bring a piece of our joy into your
          home.
        </p>
      </div>
    </section>
  );
}
