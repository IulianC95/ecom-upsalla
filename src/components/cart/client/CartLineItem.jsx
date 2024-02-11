import Spinner from '@/components/common/client/Spinner';
import StarRating from '@/components/ui/server/StarRating';
import { useProduct } from '@/hooks';
import { baseUrl } from '@/index';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useState } from 'react';

export const CartLineItem = ({ product, removeFromCart }) => {
  const { quantity: initialQuantity, productId } = product;
  const [quantity, setSquantity] = useState(initialQuantity);
  const { product: fullProduct, loading } = useProduct(productId);

  if (loading) {
    return (
      <tr>
        <td className="flex justify-center items-center text-center">
          <Spinner></Spinner>
        </td>
      </tr>
    );
  }

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, price, image, rating } = fullProduct;

  const rate = fullProduct.rating.rate;

  const count = fullProduct.rating.count;

  const decreaseQuantity = () => {
    setSquantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity,
    );
  };

  const increaseQuantity = () => {
    setSquantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <tr className="border-b text-black">
      <td>
        <button type="button" title={`Remove ${title} from cart`}>
          <MdOutlineDeleteForever size={40} />
        </button>
      </td>

      <td></td>

      <td className="py-4 px-2 flex gap-4">
        <Link href={`/products/${productId}`}>
          <Image
            width={70}
            height={70}
            src={image}
            alt={title}
            objectFit="contain"
          />
        </Link>

        <div className="flex flex-col items-start justify-start gap-3">
          <Link className="font-medium" href={`/products/${productId}`}>
            {title}
          </Link>

          <section className="flex items-center justify-center">
            <StarRating rating={rating}></StarRating>

            <div className="flex items-center justify-center">
              <span className="pl-4">{rate}</span>
              <span className="pl-4">({count} Reviews)</span>
            </div>
          </section>
        </div>
      </td>

      <td className="text-center px-2">${price}</td>

      <td style={{ height: '100px' }} className="text-center px-2">
        <div className="border border-black flex items-center justify-center gap-1">
          <button
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
            className="text-xl font-semibold hover:bg-gray-200 p-2"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className="text-xl font-semibold hover:bg-gray-200 p-2"
          >
            +
          </button>
        </div>
      </td>

      <td className="text-center px-2">{(price * quantity).toFixed(2)}</td>
    </tr>
  );
};
