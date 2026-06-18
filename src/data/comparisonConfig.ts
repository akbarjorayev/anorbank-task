import type { Product } from '../types/product';

export type RowKey = keyof Omit<Product, 'id' | 'name'>;

export const rowLabels: Record<RowKey, string> = {
  brand: 'Brend',
  price: 'Narxi',
  color: 'Rangi',
  storage: 'Xotira',
  screenSize: 'Ekran',
  os: 'Operatsion tizim',
};

export const rowKeys: RowKey[] = Object.keys(rowLabels) as RowKey[];

export function hasDifferences(values: unknown[]): boolean {
  return new Set(values).size > 1;
}

export function formatCellValue(key: RowKey, value: unknown): string {
  if (key === 'price') return `$${value}`;
  return String(value);
}