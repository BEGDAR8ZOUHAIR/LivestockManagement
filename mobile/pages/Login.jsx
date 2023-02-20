import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://192.168.9.30:5000/client/login", {
        // const res = await fetch("http://192.168.0.171:5000/client/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.error)
      {
        
        Alert.alert("Error", data.error, [{ text: "OK" }]);
      
      } else {
        navigation.navigate("Nav");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <ScrollView>
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 250 , marginBottom: 10 }}
        source={require("../assets/login.png")}
      />

      <Text style={styles.title}>Welcom to Cattle Zoo</Text>
      <View style={styles.formContainer}>
        {/* <Image source={require("../assets/email.png")} style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.formContainer}>
        {/* <Image source={require("../assets/email.png")} style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>
            Don't have an account?{" "}
            <Text style={styles.registerLink}> Register now</Text>
          </Text>
        </TouchableOpacity>
        </View>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    marginTop: 60,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formContainer: {
    width: "85%",
  },
  input: {
    height: 40,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 40,
    backgroundColor: "#3ED400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    marginTop: 16,
    textAlign: "center",
  },
  registerLink: {
    color: "#3ED400",
    fontWeight: "bold",
  },
});

export default LoginScreen;
