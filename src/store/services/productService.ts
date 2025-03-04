import { Product } from '../types/product'
import ProductsMock from '../mocks/productsMock.json'
import { mapFromProductDto } from '../utils/product-mapper.utils'

export async function getProducts(): Promise<Product[]> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(ProductsMock.map((productDto) => mapFromProductDto(productDto)))
    }, 2000),
  )
}
