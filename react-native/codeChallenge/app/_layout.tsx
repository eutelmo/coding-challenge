import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import RootApp from './App';

//Provider
import { ProductsProvider } from '@/context/productsDataContext';
import { TransactionProvider } from '@/context/transactionsDataContext';
import { ModalProvider } from '@/context/modalContext';

//Compoents
import SnackBarProvider from '@/context/snackBarContext';


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
    <SnackBarProvider>
      <ModalProvider>
        <ProductsProvider>
          <TransactionProvider>
            <RootApp />
          </TransactionProvider>
        </ProductsProvider>
      </ModalProvider>
    </SnackBarProvider>
  );
}
