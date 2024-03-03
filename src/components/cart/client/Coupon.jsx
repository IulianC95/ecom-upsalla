import { useState } from 'react';

export const Coupon = ({ onApply }) => {
  const [inputCode, setInputCode] = useState('');
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          onApply(inputCode);
        }}
      >
        <input
          type="text"
          name="coupon"
          id="coupon"
          className="border border-zinc-400 py-2 px-3 focus:outline-amber-600 focus:outline-double"
          placeholder="Coupon Code"
          onChange={(e) => setInputCode(e.target.value)}
        />

        <button
          type="submit"
          className="border-2 border-black bg-transparent transition-colors hover:bg-amber-600 hover:border-amber-600 hover:text-white py-2 px-2 lg:px-8 coupon-btn"
          title="Apply coupon"
        >
          Apply Coupon
        </button>
      </form>
    </div>
  );
};
