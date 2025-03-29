import { ProductImage } from "./ProductImageProps";

export interface ProductsDataContextType {
    productsData: ProductImage[];
    setProductsData: (productsData: ProductImage[]) => void;

    loadingProductsData: boolean;
    setLoadingProductsData: (loading: boolean) => void;

    productsError: string | null;
    setProductsError: (error: string | null) => void;
}