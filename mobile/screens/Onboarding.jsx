
 import React from "react";
import { View , Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";


export default function Onboarding({ navigation })
{
  const onboarding = [
    {
      id: 1, title: "Welcome to Cattle Zoo", subtitle: "The best place to find your cattle", image: require("../assets/dd.png")
    },
    {
      id: 2, title: "Controling your cattle's health", subtitle: "You can control your cattle's health by using our app", image: require("../assets/dd2.png")
    },
    {
      id: 3, title: "Cattle's health is our priority", subtitle: "We care about your cattle's health", image: require("../assets/dd3.png")
    },
  ];
  return (
    <View style={styles.container}>
      <Swiper paginationStyle={{ 
        position: "absolute",
        bottom: 50,
      }}
        activeDotColor="#3ED400"
        activeDotStyle={{ width: 20, height: 8 }}
        dotColor="gray"
        loop={false}
      >
        {onboarding.map((item) => (
          <View style={styles.slide} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity
        style={{
          backgroundColor: "#3ED400",
          paddingVertical: 15,
          borderRadius: 10,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>


     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
});




      
