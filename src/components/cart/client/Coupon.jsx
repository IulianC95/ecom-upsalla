export const Coupon = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
      <form className="flex gap-3">
        <input
          type="text"
          name="coupon"
          id="coupon"
          className="border border-zinc-400 py-2 px-3 focus:outline-amber-600 focus:outline-double"
          placeholder="Coupon Code"
        />

        <button
          type="button"
          className="border-2 border-black bg-transparent transition-colors hover:bg-amber-600 hover:border-amber-600 hover:text-white py-2 px-2 lg:px-8 coupon-btn"
          title="Apply coupon"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};
