export const Promo = () => {
  return (
    <section className="flex justify-center">
      <div className="w-4/5 bg-[url('/images/promo.jpg')] mt-10 h-96 flex flex-col items-center justify-around rounded-md">
        <h1 className="text-black uppercase text-4xl opacity-80 bg-white py-4 px-10 rounded-lg">
          Winter sale!
        </h1>

        <p className="text-black opacity-80 bg-white py-4 text-xl px-10 text-center">
          Apply &apos;winter20&apos; coupon code and get 20% discount
        </p>
      </div>
    </section>
  );
};
