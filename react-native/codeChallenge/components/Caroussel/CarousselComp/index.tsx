import React, { useEffect, useState } from 'react'
import { useProducts } from '@/utils/hooks/useProducts';
import { FlatList, View, Image, Text } from 'react-native';

//Types
import { ProductImage } from '@/utils/types/ProductImageProps';

//Styles
import { styles } from './style';
import sizes from '@/utils/sizes';


export default function CarousselComp() {
    const { productsData, isLoading, refetch } = useProducts();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        refetch();
    }, [refetch]);

    const onScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        setOffset(contentOffsetX);
    };

    if (isLoading) return <Text> Loading... </Text>
    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                horizontal
                keyExtractor={(item, index) => `${item.id}+${index}`}
                renderItem={({ item, index }) => (
                    <View style={{ marginLeft: index === 0 && offset === 0 ? sizes.scaleWidthSize(20) : 0 }}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}