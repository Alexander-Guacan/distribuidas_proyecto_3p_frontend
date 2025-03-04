import { Product } from '../types/product'
import { ProductDto } from '../types/product-dto'

export function mapFromProductDto(productDto: ProductDto): Product {
  return {
    id: productDto.Id,
    sku: productDto.Sku,
    name: productDto.Name,
    description: productDto.Description,
    price: productDto.Price,
    stock: productDto.Stock
  }
}
