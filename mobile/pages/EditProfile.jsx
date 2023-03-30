import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cin, setCin] = useState("");
 

  useEffect(() => {
        async function fetchUserData() {
            const userId = await AsyncStorage.getItem('userId');
            console.log(userId);

            try {
                const response = await fetch(`http://192.168.9.30:5000/client/getClientById/${userId}`);
                const data = await response.json();
                setUser(data);
                setFullName(data.fullName);
                setEmail(data.email);
                setPhoneNumber(data.phoneNumber);
                setCin(data.cin);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUserData();
    }, []);

  const handleSave = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      cin: cin
    };
    try {
      await fetch(`http://192.168.9.30:5000/client/updateClient/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="CIN"
          value={cin}
          onChangeText={setCin}
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3ED400",
    padding: 20,
  },
  title: {
    fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    form: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
    saveButton: {
        backgroundColor: "#3ED400",
        padding: 10,
        borderRadius: 5,
    },
    saveButtonText: {
        color: "#fff",
        textAlign: "center",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EditProfile;
