import React from 'react'
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Utils
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '@/Styles/global';

//Screens
import DashboardScreen from '@/screens/dashboardScreen/dashboardScreen';
import TransactionScreen from '@/screens/transactionScreen/transactionsScreen';

const Stack = createStackNavigator();

export default function RootApp() {
    return (
        <View style={globalStyles.container}>
            <Stack.Navigator
                initialRouteName="DashboardScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
            </Stack.Navigator>
        </View>
    )
}