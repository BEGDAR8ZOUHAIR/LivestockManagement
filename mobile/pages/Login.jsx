import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigation = useNavigation();

   const handleLogin = async () => {

    setLoading(true);
    try {
      const res = await fetch("http://192.168.9.30:5000/client/login", {
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

      if (res.status === 401) {
        setEmailValid(false);
        setPasswordValid(false);
      } else if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setUserId(data.id);
        await AsyncStorage.setItem("userId", data.id);
        navigation.navigate("Nav");
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.", [
          { text: "OK" },
        ]);
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong. Please try again.", [
        { text: "OK" },
      ]);
    } finally {
      setLoading(false);
    }
  };

    const handleEmailChange = (value) => {
    setEmail(value);
    setEmailValid(true);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordValid(true);

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
        <TextInput
          style={[
            styles.input,
            !emailValid && {
              borderColor: "red", borderWidth: 2,
            },
          ]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            !passwordValid && { borderColor: "red", borderWidth: 2 },
          ]}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        </View>
        {loading ? (
        <ActivityIndicator size="large" color="#3ED400" /> 
        ) : (
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("Nav")}
        >
          <Text style={styles.registerText}>
            Don't have an account?{" "}
            <Text style={styles.registerLink}>Register</Text>
          </Text>
        </TouchableOpacity>

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
    backgroundColor: "#3ED400",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 20,
    width: "85%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
  },
  registerLink: {
    color: "#3ED400",
    fontWeight: "bold",
  },


 
});

export default LoginScreen;
