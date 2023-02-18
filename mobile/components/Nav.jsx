import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          } else if (route.name === "Register") {
            iconName = focused ? "person-add" : "person-add-outline";
          } else if (route.name === "Dashboard") {
            iconName = focused ? "list" : "list-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#3ED400",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      /> */}

      <>
        {/* <Tab.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        /> */}
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </>
    </Tab.Navigator>
  );
};

export default Tabs;
