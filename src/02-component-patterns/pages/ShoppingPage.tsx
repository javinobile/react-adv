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
                    ({ count, reset, increaseBy, isMaxCountReached }) => (
                        <>
                            <ProductCard.Image />
                            <ProductCard.Title title={product.title} />
                            <ProductCard.Buttons />
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
