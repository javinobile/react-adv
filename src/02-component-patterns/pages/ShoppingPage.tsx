import { ProductCard } from '../components';
import "../styles/custom-styles.css";
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard className='bg-dark text-white'
                initialValues={{ count: 4, maxCount: 10 }}
                product={product}>

                {
                    ({count, reset, increaseBy, isMaxCountReached}) => (
                        <>
                            <ProductCard.Image className='custom-image' />
                            <ProductCard.Title className='text-white' title={product.title} />
                            <ProductCard.Buttons style={{ display: 'flex', justifyContent: 'center' }} className='custom-buttons' />

                            <button onClick={reset}>Reset</button>
                            <button onClick={()=>increaseBy(-2)}>-2</button>
                            <button hidden={isMaxCountReached} onClick={()=>increaseBy(+2)} >+2</button>
                            <span>{count}</span>
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
