import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const initialForm = {
  name: { value: '', error: '' },
  sku: { value: '', error: '' },
  description: { value: '', error: '' },
  price: { value: '', error: '' },
  stock: { value: '', error: '' },
}

export function ProductForm() {
  const [fields, setFields] = useState(initialForm)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (field: keyof typeof fields, value: string) => {
    setFields((prev) => ({
      ...prev,
      [field]: { ...prev[field], value },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccessMessage('✅ PRODUCTO GUARDADO EXITOSAMENTE')
    setTimeout(() => {
      setSuccessMessage('')
      setFields(initialForm)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border-2 border-orange-500 bg-white p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">🛒 Stores</h2>
        <p className="mb-4 text-center text-gray-500">
          Página para agregar a los productos de las tiendas
        </p>

        {successMessage && (
          <p className="mb-3 text-center font-bold text-green-600">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {Object.entries(fields).map(([key, field]) => {
            return (
              <div key={key} className="flex items-center gap-2 rounded-md bg-gray-100 p-2">
                <label
                  className="w-1/3 text-center font-semibold text-gray-600 uppercase"
                  htmlFor={key}
                >
                  {key.replace('_', ' ')}
                </label>
                <input
                  id={key}
                  className="w-2/3 rounded-md border border-gray-300 border-orange-500 bg-white p-1"
                  type={key === 'price' || key === 'stock' ? 'number' : 'text'}
                  value={field.value}
                  onChange={(e) => handleChange(key as keyof typeof fields, e.target.value)}
                />
              </div>
            )
          })}

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-orange-600 px-5 py-2 text-white hover:bg-orange-500"
            >
              <FaPlus /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
