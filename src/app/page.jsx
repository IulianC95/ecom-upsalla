import { CartControls } from '@/components/cart/client';
import {
  GridControls,
  Pagination,
  ProductGrid,
} from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section className="py-8">
        <ProductGrid></ProductGrid>

        <div className="flex justify-center py-10">
          <Pagination></Pagination>
        </div>
      </section>

      <section></section>
    </div>
  );
}
