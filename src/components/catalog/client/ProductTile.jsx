import { AddToCart } from '@/components/cart/client';
import StarRating from '@/components/ui/server/StarRating';
import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;

  const { title, image: imageUrl, price, id, rating } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="w-1/2 h-full flex flex-col items-center justify-between gap-4 animate-fadeIn pb-8 hover:scale-105 transition-transform duration-300">
      <header className="text-center flex flex-col gap-4 h-full justify-center">
        <Link
          href={productUrl}
          title={title}
          className="flex items-center justify-center"
        >
          <div className="relative h-200 w-200">
            {' '}
            {/* Set fixed dimensions here */}
            <Image
              src={imageUrl}
              alt={`Image for product ${title}`}
              layout="fill" // Use fill layout
              objectFit="contain" // Cover the container
              className="rounded-lg" // You can apply additional styles as needed
            />
          </div>
        </Link>

        <h1 className="uppercase text-zinc-400 mb-2">
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
        <div className="text-zinc-900 font-light">
          <StarRating rating={rating} />
        </div>
      </section>

      <footer>
        <AddToCart product={product} />
      </footer>
    </article>
  );
};
