import { AddToCart } from '@/components/cart/client';
import StarRating from '@/components/ui/server/StarRating';
import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;

  const { title, image: imageUrl, price, id, rating } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="w-full h-full flex flex-col items-center justify-between gap-4 animate-fadeIn pb-8 hover:scale-105 transition-transform duration-300">
      <header className="text-center flex flex-col gap-4 h-full justify-center">
        <Link href={productUrl} title={title}>
          <Image
            height={200}
            width={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            className="inline"
            objectFit="contain"
          />
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
