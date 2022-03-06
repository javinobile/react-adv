import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'


//context para que los componentes se comuniqunen entre si sin necesidad de pasar atributos por props
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


<<<<<<< HEAD
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string 
    style?: CSSProperties;
}



export const ProductCard = ({ children, product, className, style }: ProductCardProps ) => {
=======

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties 
}


export const ProductCard = ({ children, product, className, style }: Props ) => {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
<<<<<<< HEAD
            <div style={style} className={ `${ styles.productCard } ${className}` }>
=======
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
                { children }
            </div>
        </Provider>
    )
}
