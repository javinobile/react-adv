import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string;
<<<<<<< HEAD
    style?: CSSProperties;
}

=======
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

export const ProductImage = ({ img = '', className, style }: Props) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }


    return (
<<<<<<< HEAD
        <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product" />
=======
        <img 
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
        />
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    );
}