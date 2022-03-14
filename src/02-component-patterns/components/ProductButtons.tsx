import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxCountReached = useCallback(
        () => !!maxCount && counter >= maxCount,
        [counter, maxCount],
    )

    return (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                className={`${styles.buttonAdd} ${isMaxCountReached() ? styles.disabled : ''}`}
                onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
}