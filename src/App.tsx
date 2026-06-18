import { useProductComparison } from './hooks/useProductComparison';
import { ProductList } from './components/ProductList';
import { ComparisonTable } from './components/ComparisonTable';

function App() {
  const {
    products,
    selectedIds,
    selectedProducts,
    handleToggle,
    handleRemove,
  } = useProductComparison();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-3 py-6">
        <header className="text-center mb-6">
          <h1 className="text-lg font-bold text-gray-800">Mahsulotlarni taqqoslash</h1>
        </header>

        <ProductList
          products={products}
          selectedIds={selectedIds}
          onToggle={handleToggle}
        />

        {selectedProducts.length > 0 && (
          <div className="mt-6">
            <ComparisonTable
              products={selectedProducts}
              onRemove={handleRemove}
            />
          </div>
        )}

        {selectedProducts.length === 0 && (
          <section className="mt-8 text-center text-xs text-gray-400">
            <p>Hali mahsulot tanlanmagan.</p>
            <p className="mt-1">Yuqoridagi kartochkalardan "Taqqoslash" tugmasini bosing.</p>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;