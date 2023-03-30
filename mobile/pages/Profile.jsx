
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

   useEffect(() => {
        async function fetchUserData() {
            const userId = await AsyncStorage.getItem('userId');
            console.log(userId);

            try {
                const response = await fetch(`http://192.168.9.30:5000/client/getClientById/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        // Clear the user ID from async storage
        await AsyncStorage.removeItem('userId');
        // Navigate to the login screen
        navigation.navigate('Login');
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
      <ImageBackground
        source={require("../assets/dashboard.png")}
        style={styles.bgImage}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.editButton}  onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editButtonText}>Edit</Text>
           
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {user ? (
            <>
              <View style={styles.information}>
                <Text style={styles.fullName}>{user.fullName}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.phoneNumber}>{user.phoneNumber}</Text>
                <Text style={styles.cin}>{user.cin}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                  <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.text}>Your profile is empty.</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>Register now</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    bordeShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,


  },
  editButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  editButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",

  },
  information: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
     bordeShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  email: {
    fontSize: 15,
    color: "#fff",
     bordeShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  phoneNumber: {
    fontSize: 15,
    color: "#fff",
     bordeShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  cin: {
    fontSize: 15,
    color: "#fff",
     bordeShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  logoutButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  registerButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },





  
});

export default ProfileScreen;


