import { AddToCart } from '@/components/cart/client';
import StarRating from '@/components/ui/server/StarRating';
import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;

  const { title, image: imageUrl, price, id, rating } = product;

  const productUrl = `/products/${id}`;

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
          />
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
