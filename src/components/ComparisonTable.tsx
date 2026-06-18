import type { Product } from '../types/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { rowLabels, rowKeys, formatCellValue } from '../data/comparisonConfig'

type ComparisonTableProps = {
  products: Product[]
  onRemove: (id: number) => void
}

export function ComparisonTable({ products, onRemove }: ComparisonTableProps) {
  if (products.length === 0) return null

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-700 mb-2">Taqqoslash</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-3 py-2 font-medium text-gray-500 border-b border-gray-200 w-24">
                Mahsulot
              </th>
              {products.map((p) => (
                <th
                  key={p.id}
                  className="text-left px-3 py-2 font-medium text-gray-700 border-b border-gray-200 min-w-[130px]"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="truncate text-xs">{p.name}</span>
                    <button
                      className="text-gray-400 hover:text-red-600 rounded p-0.5 leading-none transition-colors cursor-pointer"
                      onClick={() => onRemove(p.id)}
                      aria-label={`${p.name} ni olib tashlash`}
                    >
                      <FontAwesomeIcon icon={faTrash} className="size-4" />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowKeys.map((key) => {
              const values = products.map((p) => p[key])

              return (
                <tr key={key} className="bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-500 border-b border-gray-100">
                    {rowLabels[key]}
                  </td>
                  {values.map((val, i) => (
                    <td
                      key={products[i].id}
                      className="px-3 py-2 border-b border-gray-100 text-gray-900 font-semibold"
                    >
                      {formatCellValue(key, val)}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
