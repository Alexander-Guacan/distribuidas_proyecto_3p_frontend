import { FaEdit, FaPlus, FaSpinner, FaTrash } from 'react-icons/fa'
import { useProducts } from '../hooks/useProducts'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function ProductTable() {
  const { products, loading, error } = useProducts()
  const [dashboardProducts, setDashboardProducts] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState(dashboardProducts)

  useEffect(() => {
    if (!products) return

    setDashboardProducts(products)
    setFilteredProducts(products)
  }, [products])

  const deleteProduct = (productIdDeleting: number) => {
    setDashboardProducts(
      (products) => products?.filter((product) => product.id !== productIdDeleting) ?? null,
    )
    setFilteredProducts(
      (products) => products?.filter((product) => product.id !== productIdDeleting) ?? null,
    )
  }

  return (
    <section className="px-8">
      <header className="flex items-center justify-between py-6 text-left">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-gray-400">Page to manage products</p>
        </div>
        <div>
          <Link
            to={'/products/add'}
            className="flex items-center gap-2 rounded-md bg-orange-600 p-2 text-xs text-gray-100 hover:cursor-pointer hover:bg-orange-500"
            type="button"
          >
            <FaPlus /> Add product
          </Link>
        </div>
      </header>

      <div className="custom-scrollbar relative h-[70vh] overflow-y-auto">
        <table className="my-[-20px] w-full border-separate border-spacing-y-5 gap-4 text-center text-sm">
          <thead className="sticky top-0">
            <tr className="bg-gray-100">
              <th className="rounded-l-md border-t border-b border-l border-gray-300 p-2 px-5">
                ID
              </th>
              <th className="border-t border-b border-gray-300 p-2 px-5">Name</th>
              <th className="border-t border-b border-gray-300 p-2 px-5">SKU</th>
              <th className="border-t border-b border-gray-300 p-2 px-5">Description</th>
              <th className="border-t border-b border-gray-300 p-2 px-5">Price</th>
              <th className="border-t border-b border-gray-300 p-2 px-5">Stock</th>
              <th className="rounded-r-md border-t border-r border-b border-gray-300 p-2 px-5">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td className="p-2 text-center" colSpan={6}>
                  <FaSpinner className="inline animate-spin" />
                </td>
              </tr>
            ) : !filteredProducts || !filteredProducts.length ? (
              <tr>
                <td className="text-gray-400" colSpan={6}>
                  {error || 'Products not found'}
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="rounded-l-md border-t border-b border-l border-gray-300 p-2 px-5">
                    {product.id}
                  </td>

                  <td className="border-t border-b border-gray-300 p-2 px-5">{product.name}</td>

                  <td className="border-t border-b border-gray-300 p-2 px-5">{product.sku}</td>

                  <td className="border-t border-b border-gray-300 p-2 px-5">
                    {product.description}
                  </td>

                  <td className="border-t border-b border-gray-300 p-2 px-5">
                    ${product.price.toFixed(2)}
                  </td>

                  <td className="border-t border-b border-gray-300 p-2 px-5">{product.stock}</td>

                  <td className="rounded-r-md border-t border-r border-b border-gray-300 p-2 px-5">
                    <div className="flex justify-center gap-4">
                      <button className="text-amber-500 hover:cursor-pointer" type="button">
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:cursor-pointer"
                        type="button"
                        onClick={() => deleteProduct(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
