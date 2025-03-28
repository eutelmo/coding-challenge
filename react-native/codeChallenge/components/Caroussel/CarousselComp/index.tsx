import React, { useEffect } from 'react'
import { useProducts } from '@/utils/hooks/useProducts';
import { FlatList, View, Image, Text } from 'react-native';

//Types
import { ProductImage } from '@/utils/types/ProductImageProps';

//Styles
import { styles } from './style';


export default function CarousselComp() {

    const { productsData, isLoading, refetch } = useProducts();

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) return <Text> LOading </Text>
    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.image }} style={styles.image} />
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}