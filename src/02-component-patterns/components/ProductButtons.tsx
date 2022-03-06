import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
<<<<<<< HEAD
    style?: CSSProperties;
}


export const ProductButtons = ({className, style} : Props) => {
=======
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4

    const { increaseBy, counter } = useContext( ProductContext );

    return (
<<<<<<< HEAD
        <div style={style} className={ `${styles.buttonsContainer} ${className}`  }>
=======
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}