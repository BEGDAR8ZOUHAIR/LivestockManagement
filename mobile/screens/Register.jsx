import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import
{
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";

const Register = () =>
{
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [cin, setCin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () =>
  {
    try
    {
      const res = await fetch("http://192.168.1.159:5000/client/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          cin,
          phoneNumber,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.error)
      {
        Alert.alert("Error", data.error, [{ text: "OK" }]);

      } else
      {
        navigation.navigate("Login");
      }
    } catch (err)
    {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          // style={{ width: 300, height: 300 }}
          source={require("../assets/register.png")}
        />

        <Text style={styles.title}>Register</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            keyboardType=""
            autoCapitalize="none"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cin"
            keyboardType=""
            autoCapitalize="none"
            value={cin}
            onChangeText={(text) => setCin(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType=""
            autoCapitalize="none"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerText}>
              Already have an account?
              <Text style={styles.registerLink}>Login now</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },
  formContainer: {
    width: "85%",
  },
  input: {
    height: 45,
    backgroundColor: "#F9F9F9",
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  button: {
    height: 45,
    backgroundColor: "#3ED400",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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

export default Register;
