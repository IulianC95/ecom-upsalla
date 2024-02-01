import { CartControls } from '@/components/cart/client';
import { GridControls, ProductGrid } from '@/components/catalog/client';
import React from 'react';

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section>
        <ProductGrid></ProductGrid>
      </section>

      <section></section>
    </div>
  );
}
