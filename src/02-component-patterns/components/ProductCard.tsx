import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeProductArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'


//context para que los componentes se comuniqunen entre si sin necesidad de pasar atributos por props
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string
    style?: CSSProperties;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
}



export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({onChange, product, value});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}
