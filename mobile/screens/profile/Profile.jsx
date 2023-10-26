import React, { useState, useEffect } from "react";
import
{
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () =>
{
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() =>
  {
    async function fetchUserData()
    {
      const userId = await AsyncStorage.getItem("userId");

      try
      {
        const response = await fetch(
          `http://192.168.1.159:5000/client/getClientById/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error)
      {
        console.error(error);
      } finally
      {
        setIsLoading(false);
      }
    }
    fetchUserData();

    // Refresh the screen every 10 seconds
    const intervalId = setInterval(() =>
    {
      setRefresh(!refresh);
    }, 10000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [refresh]);

  const handleLogout = async () =>
  {
    await AsyncStorage.removeItem("userId");
    navigation.navigate("Login");
  };

  const handleEditProfile = () =>
  {
    navigation.navigate("EditProfile");
  };

  if (isLoading)
  {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3ED400" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>

        <Image
          style={styles.coverPhoto}
          source={require("../../assets/cover.jpg")}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={require("../../assets/profile.png")}
          />
          <Text style={styles.nameText}>{user.fullName}</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          {user.email}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>{user.phoneNumber}</Text>
          <Text style={styles.statLabel}>{user.cin}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonlogout} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>

  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    // marginTop: 20,
  },
  bioText: {
    fontSize: 16,
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  statContainer: {
    alignItems: 'center',
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#3ED400',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonlogout: {
    backgroundColor: '#FF0000',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ProfileScreen;