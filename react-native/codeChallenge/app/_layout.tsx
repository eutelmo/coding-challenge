import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/utils/hooks/useColorScheme';
import RootApp from './App';

//Provider
import { ProductsProvider } from '@/context/productsDataContext';
import { TransactionProvider } from '@/context/transactionsDataContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ProductsProvider>
      <TransactionProvider>
        <RootApp />
      </TransactionProvider>
    </ProductsProvider>
  );
}
