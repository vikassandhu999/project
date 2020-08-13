import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createStackNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Register"
            component = {LoginScreen}
            options = {{title:"Register with phone number"}}
            />
          <Stack.Screen
            name = "Otp"
            component = {OtpScreen}
            options = {{title : "Enter the OTP"}}
          />
          <Stack.Screen
            name = "Profile"
            component = {ProfileScreen}
            options = {{headerShown : false}}
            />
          <Stack.Screen
            name = "Book"
            component = {BookingScreen}
            options = {{title : "Booking"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}