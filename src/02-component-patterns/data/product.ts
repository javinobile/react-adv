import { Product } from "../interfaces/interfaces"


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug 2',
    img: './coffee-mug2.png'
}

export const products: Product[] = [
    product, product2
]

export interface ProductInCart extends Product {
    counter: number;
}
