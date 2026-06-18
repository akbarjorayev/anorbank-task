import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: Product[];
  selectedIds: number[];
  onToggle: (id: number) => void;
};

export function ProductList({ products, selectedIds, onToggle }: ProductListProps) {
  const isMaxSelected = selectedIds.length >= 3;

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Mahsulotlar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedIds.includes(product.id)}
            isDisabled={isMaxSelected}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}