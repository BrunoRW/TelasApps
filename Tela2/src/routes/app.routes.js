import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TelaA } from "../pages/TelaA";
import { TelaB } from "../pages/TelaB";
import { TelaC } from "../pages/TelaC";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="TelaA" component={TelaA} />
          <Drawer.Screen name="TelaB" component={TelaB} />
          <Drawer.Screen name="TelaC" component={TelaC} />
      </Drawer.Navigator>
  );
}