import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeProductArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeProductArgs) => void
    value?: number;
}

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeProductArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)
        setCounter(initialValues?.maxCount && newValue >= initialValues.maxCount ? initialValues.maxCount : newValue)
        onChange && onChange({ product, count: newValue })
    }

    const reset  = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])

    //effect para controlar si el componente fue montado o no
    useEffect(() => {
        isMounted.current = true;
    }, [])


    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount
    }

}