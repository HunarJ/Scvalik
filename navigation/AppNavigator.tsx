import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

            if (route.name === "Domů") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Přihlásit se") {
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name === "Registrace") {
              iconName = focused ? "person-add" : "person-add-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Domů" component={HomeScreen} />
        <Tab.Screen name="Přihlásit se" component={LoginScreen} />
        <Tab.Screen name="Registrace" component={RegistrationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
