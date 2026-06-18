import type { Product } from '../types/product';

type ProductCardProps = {
  product: Product;
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: (id: number) => void;
};

export function ProductCard({ product, isSelected, isDisabled, onToggle }: ProductCardProps) {
  const buttonLabel = isSelected ? 'Olib tashlash' : 'Taqqoslash';
  const isDisabledBtn = !isSelected && isDisabled;

  return (
    <div
      className={`rounded-lg border p-3 flex flex-col gap-1 transition-all duration-200 ${
        isSelected ? 'border-indigo-500 bg-indigo-50 shadow-md scale-[1.02]' : 'border-gray-200 bg-white shadow-sm hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-1">
        <h3 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
        <span className="text-xs text-gray-500 shrink-0">{product.brand}</span>
      </div>
      <button
        className={`mt-1 text-xs text-white font-medium px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer disabled:cursor-not-allowed ${
          isDisabledBtn ? 'bg-gray-400' : isSelected ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
        onClick={() => onToggle(product.id)}
        disabled={isDisabledBtn}
      >
        {buttonLabel}
      </button>
    </div>
  );
}