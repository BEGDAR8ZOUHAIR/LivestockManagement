import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Animal") {
            iconName = focused ? "cow" : "cow-off";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "account-cowboy-hat"
              : "account-cowboy-hat-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#3ED400",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Animal"
        component={Home}
        options={{ headerShown: false }}
      />

      <>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </>
    </Tab.Navigator>
  );
};

export default Tabs;
