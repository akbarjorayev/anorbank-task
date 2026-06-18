import { useMemo } from 'react';
import { products } from '../data/products';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'comparison-products';
const MAX_SELECTION = 3;

export function useProductComparison() {
  const [selectedIds, setSelectedIds] = useLocalStorage<number[]>(STORAGE_KEY, []);

  const selectedProducts = useMemo(
    () => products.filter((p) => selectedIds.includes(p.id)),
    [selectedIds]
  );

  const handleToggle = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((pid) => pid !== id);
      }
      if (prev.length >= MAX_SELECTION) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleRemove = (id: number) => {
    setSelectedIds((prev) => prev.filter((pid) => pid !== id));
  };

  const isMaxSelected = selectedIds.length >= MAX_SELECTION;

  return {
    products,
    selectedIds,
    selectedProducts,
    isMaxSelected,
    handleToggle,
    handleRemove,
  };
}