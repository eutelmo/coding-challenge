import React, { useCallback, useEffect } from 'react'

//Utils
import { useProductsContext } from '@/context/productsDataContext';
import { useSnackBarContext } from './useSnackBar';

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

    //Hook For snackBar
    const {
        setIsErrorGetProducts,
    } = useSnackBarContext();


    const fetchProducts = useCallback(async () => {
        try {
            setLoadingProductsData(true);
            setProductsError(null);
            setIsErrorGetProducts(false);

            const response = await fetch(url);
            const data = await response.json();
            setProductsData(data);
        } catch (err) {
            setProductsError("Error Get Products");
            setIsErrorGetProducts(true);
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