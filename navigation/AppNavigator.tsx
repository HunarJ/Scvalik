import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegistrationScreen from '../screens/Auth/RegistrationScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Domů" component={HomeScreen} />
        <Tab.Screen name="Přihlásit se" component={LoginScreen} />
        <Tab.Screen name="Registrace" component={RegistrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
