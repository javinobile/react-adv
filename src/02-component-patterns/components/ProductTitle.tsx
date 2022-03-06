import { CSSProperties, useContext } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

<<<<<<< HEAD
export interface Props {
    className?: string;
    title?: string;
    style?: CSSProperties;
}


=======

export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string;
    style?: React.CSSProperties 
}

>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext( ProductContext )

    return (
<<<<<<< HEAD
        <span style={style} className={ `${styles.productDescription} ${className}` }>
=======
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
            { title ? title : product.title }
        </span>
    );
}