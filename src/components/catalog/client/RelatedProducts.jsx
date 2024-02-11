import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AddToCart } from '@/components/cart/client';
import Spinner from '@/components/common/client/Spinner';

export const RelatedProducts = ({ category, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data
          .filter((product) => product.id !== currentProductId)
          .slice(0, 3);
        setRelatedProducts(filteredData);
      })
      .catch((error) => {
        console.error('An error has occured:', error);
      });
  }, [category, currentProductId]);

  return (
    <ul className="flex flex-col lg:flex-row items-center">
      {relatedProducts.length > 0 ? (
        relatedProducts.map((product) => (
          <li key={product.id} className="w-full">
            <article className="flex flex-col items-center justify-between">
              <header>
                <div className="w-full text-center flex flex-col items-center">
                  <Link href={`/products/${product.id}`} title={product.title}>
                    <div className="img-size">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={220}
                        className="w-full h-full"
                      />
                    </div>
                  </Link>
                </div>
              </header>
              <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
                <h1 className="uppercase text-zinc-400 mb-2">
                  {product.title}
                </h1>
                <p className="text-zinc-900 font-light">${product.price}</p>
                <AddToCart product={product}></AddToCart>
              </section>
            </article>
          </li>
        ))
      ) : (
        <li className="flex justify-center items-center h-screen">
          <Spinner></Spinner>
        </li>
      )}
    </ul>
  );
};
