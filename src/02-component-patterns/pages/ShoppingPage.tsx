import { ProductCard } from '../components';
import "../styles/custom-styles.css";
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';
import { ProductInCart, products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {products.map(product => (
                    <ProductCard value={shoppingCart[product.id] ? shoppingCart[product.id].counter : 0} onChange={(args) => onProductCountChange(args)} className='bg-dark text-white' key={product.id} product={product}>
                        <ProductCard.Image className='custom-image' />
                        <ProductCard.Title className='text-white' title={product.title} />
                        <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'center' }} className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>

            <div className='shopping-cart'>

                {Object.entries(shoppingCart).map(([key, value]) => (
                    <ProductCard value={value.counter} key={key} onChange={(args) => onProductCountChange(args)} style={{ width: '100px' }} className='bg-dark text-white' product={value}>
                        <ProductCard.Image className='custom-image' />
                        <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'center' }} className='custom-buttons' />
                    </ProductCard>
                ))}

                    
            </div>

        </div>
    )
}
