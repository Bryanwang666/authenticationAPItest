import { View, Text,StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer,DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignIn/';
import SignUpScreen from '../Screens/SignUp/';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import ProductBookingScreen from '../Screens/ProductBookingScreen';
const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#fff',
  },
};
const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen}options={{ headerShown: true }} />
        <Stack.Screen name='ProductBooking' component={ProductBookingScreen}options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation;