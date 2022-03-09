import { useEffect, useRef, useState } from 'react'
import { onChangeProductArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeProductArgs) => void
    value?: number;
}

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeProductArgs ) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {

        if(isControlled.current){
            return onChange!({counter: value, product})
        }

        let newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({ product, counter: newValue })
    }

    useEffect(() => {
      setCounter(value);
    }, [value])
    

    return {
        counter,
        increaseBy
    }

}