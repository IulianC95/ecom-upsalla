import { AddToCart } from '@/components/cart/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export const ProductTile = (props) => {
  const { product } = props;

  const { title, image: imageUrl, price, id, rating } = product;

  const productUrl = `/products/${id}`;

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating.rate);
    const halfStar = rating.rate % 1 > 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex justify-center text-orange-400">
        {Array(fullStars).fill(<FaStar />)}
        {halfStar ? <FaStarHalfAlt /> : ''}
        {Array(emptyStars).fill(<FaRegStar />)}
      </div>
    );
  };

  return (
    <article className="text-center">
      <header>
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            objectFit="contain"
            className="inline"
          ></Image>
        </Link>

        <h1>
          <Link
            href={productUrl}
            title={title}
            className="text-text-neutral-400"
          >
            {title}
          </Link>
        </h1>
      </header>

      <section>
        <div className="text-zinc-900 font-light">${price}</div>
      </section>
      <section>
        <div className="text-zinc-900 font-light"> {renderRating(rating)}</div>
      </section>

      <footer>
        <AddToCart product={product}></AddToCart>
      </footer>
    </article>
  );
};
