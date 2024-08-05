import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { Ionicons } from "@expo/vector-icons";
import AuthContext from '../contexts/AuthContext';

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import ProfileScreen from '../screens/ProfileScreen';

import colors from "../constants/colors";
import WorkoutsScreen from '../screens/WorkoutsScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';

const PublicTab = createBottomTabNavigator<RootStackParamList>();
const PrivateTab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

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
      headerTintColor: colors.white,
      tabBarStyle: {
        backgroundColor: colors.primary,
      },
      tabBarActiveTintColor: colors.white,
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
      headerTintColor: colors.white,
      tabBarStyle: {
        backgroundColor: colors.primary,
      },
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.secondary,
    })}
  >
    <PrivateTab.Screen name="Tréninky" component={WorkoutsScreen} />
    <PrivateTab.Screen name="Profil" component={ProfileScreen} /> 
    {/* <PrivateTab.Screen name="Tréninky" component={HomeScreen} />
    <PrivateTab.Screen name="Historie" component={HomeScreen} /> */}
  </PrivateTab.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Private" component={PrivateNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="WorkoutDetailScreen" component={WorkoutDetailScreen} />
          </>
        ) : (
          <Stack.Screen name="Public" component={PublicNavigator} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
