import { AddToCart, CartControls } from '@/components/cart/client';
import { baseUrl } from '@/index';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import Image from 'next/image';
import StarRating from '@/components/ui/server/StarRating';
import { RelatedProducts } from '@/components/catalog/client';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  ).then((res) => res.json());

  return (
    <>
      <head>
        <title>{product.title}</title>
      </head>
      <div className="container px-4 mx-auto">
        <header className="container px-4 lg:px-0 mx-auto flex justify-between">
          <div>
            <Link
              href="../../"
              className="gap-2 flex items-center justify-center border border-black text-black text-center lg:text-xl p-7 transition-colors hover:bg-amber-600 cursor-pointer hover:text-white hover:border-amber-600"
            >
              <IoReturnDownBackSharp size={30} />
              <p> Back to shop </p>
            </Link>
          </div>
          <div>
            <CartControls></CartControls>
          </div>
        </header>

        <section className="mt-16 mb-32 container px-4 lg:px-0 mx-auto grid gap-8 lg:grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-5">
            <Image
              width={408}
              height={408}
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="lg:col-start-7 lg:col-span-6 pt-12 flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <section className=" flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <h1 className="text-2xl uppercase font-medium">
                {product.title}
              </h1>
              <div className="flex items-center justify-center">
                <StarRating rating={product.rating}></StarRating>
                <div className="pl-4">
                  {product.rating.rate} Stars ({product.rating.count} Reviwes)
                </div>
              </div>
            </section>

            <section className="pt-12 text-base">
              <p>{product.description}</p>

              <p className="text-3xl leading-9 font-bold pt-12 text-black">
                ${product.price}
              </p>
            </section>

            <section className="pt-12">
              <AddToCart product={product}></AddToCart>
            </section>
          </div>
        </section>

        <hr />

        <section className="container px-4 lg:px-0 mx-auto mt-16">
          <section className="flex flex-col gap-5 mb-16">
            <h1 className="text-center uppercase font-medium text-xl">
              Related Products
            </h1>
            <div>
              <RelatedProducts
                category={product.category}
                currentProductId={product.id}
              ></RelatedProducts>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
