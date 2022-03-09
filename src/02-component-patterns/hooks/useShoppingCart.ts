import React, { useState } from 'react'
import { ProductInCart } from '../data/product'
import { Product } from '../interfaces/interfaces'

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ counter, product }: { counter: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, counter: 0 }

            if (Math.max(productInCart.counter + counter, 0) > 0) {
                productInCart.counter += counter
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart
            return {
                ...rest
            }

        })
    }

    return {
           shoppingCart,
           onProductCountChange 
    }

}
