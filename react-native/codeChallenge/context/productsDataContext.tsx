import React, { useState, useEffect, createContext, useContext } from "react";

//Types
import { ProductImage } from "@/utils/types/ProductImageProps";
import { ContextProps } from "@/utils/types/ContextProps";
import { ProductsDataContextType } from "@/utils/types/ProductsDataContextType";

export const ProductsDataContext = createContext<ProductsDataContextType | undefined>(undefined);

export function ProductsProvider({ children }: ContextProps) {
    const [productsData, setProductsData] = useState<ProductImage[]>([]);
    const [loadingProductsData, setLoadingProductsData] = useState<boolean>(false);
    const [productsError, setProductsError] = useState<Error | null>(null);

    return [
        <ProductsDataContext.Provider
            value={{
                productsData,
                setProductsData,
                loadingProductsData,
                setLoadingProductsData,
                productsError,
                setProductsError
            }
            }>
            {children}
        </ProductsDataContext.Provider>
    ];
}

export function useProductsContext() {
    const context = useContext(ProductsDataContext);
    if (!context) {
        throw new Error('useProductsData must be used within a ProductsDataProvider');
    }
    return context;
} 