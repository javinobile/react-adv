import { createContext, CSSProperties, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeProductArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'


//context para que los componentes se comuniqunen entre si sin necesidad de pasar atributos por props
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductCardProps {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: CSSProperties;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}



export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            maxCount,
            increaseBy,
            product,
        }}>
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children({
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    increaseBy,
                    product,
                    reset
                })}
            </div>
        </Provider>
    )
}
