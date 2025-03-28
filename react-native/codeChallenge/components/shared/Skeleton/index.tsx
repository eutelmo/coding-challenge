// import React, { useEffect, useRef } from 'react'
// import { Animated, Easing, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// // Types
// import { SkeletonProps } from '@/utils/types/SkeletonProps'

// // Styles
// import { styles } from './style';

// export default function Skeleton({ width, height }: SkeletonProps) {
//     const animatedValue = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         // Inicia a animação de loop
//         Animated.loop(
//             Animated.timing(animatedValue, {
//                 toValue: 1,
//                 duration: 1000,
//                 easing: Easing.linear,
//                 useNativeDriver: true
//             })
//         ).start();
//     }, [animatedValue]);

//     // Interpolação do valor da animação
//     const translateX = animatedValue.interpolate({
//         inputRange: [0, 1],
//         outputRange: [-Number(width), Number(width)] // Garante que os valores sejam números
//     });

//     return (
//         <View style={[styles.skeletonContainer, { width, height }]}>
//             <Animated.View
//                 style={[
//                     styles.skeleton,
//                     {
//                         width,
//                         height,
//                         transform: [{ translateX }]
//                     }
//                 ]}>
//                 <LinearGradient
//                     colors={['#f0f0f0', '#e0e0e0', '#f0f0f0']}
//                     style={[styles.gradient, { width, height }]}
//                     start={{ x: -1, y: 0 }}
//                     end={{ x: 1, y: 0 }}
//                 />
//             </Animated.View>
//         </View>
//     );
// };
