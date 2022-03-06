import { ReactElement } from 'react';
import { Props as ProductButtonProps} from '../components/ProductButtons';
import { ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}


export interface ProductCardHOCProps {
    ({ children, product, className }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element,
    Image: ({ img, className }: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: ProductButtonProps) => JSX.Element
}


