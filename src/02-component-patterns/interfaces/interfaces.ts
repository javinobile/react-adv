<<<<<<< HEAD
import { ReactElement } from 'react';
import { Props as ProductButtonProps} from '../components/ProductButtons';
import { ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

=======
import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
<<<<<<< HEAD
    increaseBy: (value: number) => void;
=======
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    product: Product;
    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
<<<<<<< HEAD
    ({ children, product, className }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element,
    Image: ({ img, className }: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: ProductButtonProps) => JSX.Element
=======
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
}


