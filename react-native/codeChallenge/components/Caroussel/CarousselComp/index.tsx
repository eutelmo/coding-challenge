import React from 'react'
import { FlatList, View, Image } from 'react-native';

//Types
import { ProductImage } from '@/utils/types/ProductImage';

//Styles
import { styles } from './style';

const images: ProductImage[] = [
    { id: '1', image: 'http://loremflickr.com/640/480/technics' },
    { id: '2', image: 'http://loremflickr.com/640/480/nature' },
    { id: '3', image: 'http://loremflickr.com/640/480/city' },
];

export default function CarousselComp() {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
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