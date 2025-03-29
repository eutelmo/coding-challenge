import React, { useCallback, useEffect } from 'react'

//Utils
import { useProductsContext } from '@/context/productsDataContext';
import { useSnackBarContext } from './useSnackBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";

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
        setIsErrorInternetConnection
    } = useSnackBarContext();

    //check have conectio
    const checkConnection = async () => {
        const state = await NetInfo.fetch();
        return state.isConnected;
    };

    const fetchProducts = useCallback(async () => {
        try {
            setLoadingProductsData(true);
            setProductsError(null);
            setIsErrorGetProducts(false);

            const isConnected = await checkConnection();

            if (isConnected) {
                setIsErrorInternetConnection(false);
                const response = await fetch(url);
                const data = await response.json();

                // Save AsyncStorage
                await AsyncStorage.setItem('productsData', JSON.stringify(data));
                setProductsData(data);
            } else {
                setIsErrorInternetConnection(true);
                const cachedData = await AsyncStorage.getItem('productsData');
                if (cachedData) {
                    setProductsData(JSON.parse(cachedData));
                } else {
                    setProductsError("No data available offline.");
                    setIsErrorGetProducts(true);
                }
            }
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