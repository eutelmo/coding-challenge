import React, { useCallback, useEffect } from 'react'

//Utils
import { useProductsContext } from '@/context/productsDataContext';

const url = "https://628b46b07886bbbb37b46173.mockapi.io/api/v1/products";

export function useProducts() {
    const {
        productsData,
        setProductsData,
        loadingProductsData,
        setLoadingProductsData,
        productsError,
        setProductsError
    } = useProductsContext();


    const fetchProducts = useCallback(async () => {
        try {
            setLoadingProductsData(true);
            setProductsError(null);

            const response = await fetch(url);
            const data = await response.json();
            setProductsData(data);
        } catch (err) {
            setProductsError(new Error("Error Get Products"));
        } finally {
            setLoadingProductsData(false);
        }
    }, [setProductsData, setProductsError, setLoadingProductsData]);



    return {
        productsData,
        isLoading: loadingProductsData,
        error: productsError,
        refetch: fetchProducts
    };

}