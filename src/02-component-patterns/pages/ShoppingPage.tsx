import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import "../styles/customStyle.css";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard className='bg-dark' product={product}>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white' title={'Hola Mundo'} />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard className='bg-dark' product={product}>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard className='bg-dark' product={product}>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className='text-white' title={'Hola Mundo'} />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>


            </div>
        </div>
    )
}
