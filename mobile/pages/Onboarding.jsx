import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.textStyle}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.textStyle}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.textStyle}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/dd.png")}
              // style={{ width: 200, height: 200 }}
            />
          ),
          title: "Welcome to Cattle Zoo",
          subtitle: "The best place to find your cattle ",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/dd2.png")}
              // style={{ width: 200, height: 200 }}
            />
          ),
          title: "Controling your cattle's health ",
          subtitle: "You can control your cattle's health by using our app",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/dd3.png")}
              // style={{ width: 200, height: 200 }}
            />
          ),
          title: "Cattle's health is our priority",
          subtitle: "We care about your cattle's health",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
    color: "#4E5153",
    backgroundColor: "#3ED400",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
