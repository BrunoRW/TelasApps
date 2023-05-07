import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TelaA } from "../pages/TelaA";
import { TelaB } from "../pages/TelaB";
import { TelaC } from "../pages/TelaC";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
        <Tab.Navigator>
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />
        </Tab.Navigator>
  );
}