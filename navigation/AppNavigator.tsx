import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from '../types/types';
import { Ionicons } from "@expo/vector-icons";
import AuthContext from '../contexts/AuthContext';

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import ProfileScreen from '../screens/ProfileScreen';

import colors from "../constants/colors";

const PublicTab = createBottomTabNavigator<RootStackParamList>();
const PrivateTab = createBottomTabNavigator<RootStackParamList>();

const PublicNavigator = () => (
  <PublicTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

        if (route.name === 'Domů') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Přihlásit se') {
          iconName = focused ? 'log-in' : 'log-in-outline';
        } else if (route.name === 'Registrace') {
          iconName = focused ? 'person-add' : 'person-add-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.lightText,
      tabBarStyle: {
        backgroundColor: colors.primary,
      },
      tabBarActiveTintColor: colors.lightText,
      tabBarInactiveTintColor: colors.secondary,
    })}
  >
    <PublicTab.Screen name="Domů" component={HomeScreen} />
    <PublicTab.Screen name="Přihlásit se" component={LoginScreen} />
    <PublicTab.Screen name="Registrace" component={RegistrationScreen} />
  </PublicTab.Navigator>
);

const PrivateNavigator = () => (
  <PrivateTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap = 'person-outline';

        if (route.name === 'Profil') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Tréninky') {
          iconName = focused ? 'fitness' : 'fitness-outline';
        } else if (route.name === 'Historie') {
          iconName = focused ? 'time' : 'time-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.lightText,
      tabBarStyle: {
        backgroundColor: colors.primary,
      },
      tabBarActiveTintColor: colors.lightText,
      tabBarInactiveTintColor: colors.secondary,
    })}
  >
    <PrivateTab.Screen name="Profil" component={ProfileScreen} />
    {/* <PrivateTab.Screen name="Tréninky" component={HomeScreen} />
    <PrivateTab.Screen name="Historie" component={HomeScreen} /> */}
  </PrivateTab.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
