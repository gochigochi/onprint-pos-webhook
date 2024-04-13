export type Product = {
    id: number
    name: string
    price: string
    images: ProductImage[]
}

export type Category = {
    id: number
    name: string
    slug: string
    image: ProductImage
    
}

type ProductImage = {
    id: number
    src: string
    alt: string
}

export type CartProduct = Pick<Product, 'id' | 'name' | 'price'> & { qty: number }

export type Cart = { 
    products: CartProduct[] 
    total: string
}

export type CartProductId = CartProduct["id"]
export type CartTotal = Cart["total"]
