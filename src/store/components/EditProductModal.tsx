import { useState } from 'react'
import { Product } from '../types/product'

interface EditProductModalProps {
  product: Product
  onClose: () => void
  onSave: (updatedProduct: Product) => void
}

export function EditProductModal({ product, onClose, onSave }: EditProductModalProps) {
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedProduct)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg border-orange-500">
        <h2 className="text-xl font-bold text-center mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
            className="border p-2 rounded-md border-orange-500"
            placeholder="Nombre"
          />
          <input
            type="text"
            name="sku"
            value={editedProduct.sku}
            onChange={handleChange}
            className="border p-2 rounded-md border-orange-500"
            placeholder="SKU"
          />
          <input
            type="text"
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="border p-2 rounded-md border-orange-500"
            placeholder="Descripción"
          />
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="border p-2 rounded-md border-orange-500"
            placeholder="Precio"
          />
          <input
            type="number"
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
            className="border p-2 rounded-md border-orange-500"
            placeholder="Stock"
          />
            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={onClose}
                    >
                    Cancelar
                </button>        
                      
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                Guardar
                </button>            
          </div>
        </form>
      </div>
    </div>
  )
}
