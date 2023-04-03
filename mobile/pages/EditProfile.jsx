import React, { useState, useEffect } from "react";
import
{
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () =>
{
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cin, setCin] = useState("");
  const [refresh, setRefresh] = useState(false);



  useEffect(() =>
  {
    async function fetchUserData()
    {
      const userId = await AsyncStorage.getItem('userId');
      console.log(userId);

      try
      {
        const response = await fetch(`http://172.16.100.121:5000/client/getClientById/${userId}`);
        const data = await response.json();
        setUser(data);
        setFullName(data.fullName);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setCin(data.cin);
      } catch (error)
      {
        console.error(error);
      } finally
      {
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, [refresh]);

  const handleSave = async () =>
  {
    const userId = await AsyncStorage.getItem('userId');
    const data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      cin: cin
    };
    try
    {
      await fetch(`http://172.16.100.121:5000/client/updateClient/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      navigation.navigate('Profile', { user, setUser, setRefresh }); //
    } catch (error)
    {
      console.error(error);
    }
  }

  if (isLoading)
  {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (

    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>

        <Image
          style={styles.coverPhoto}
          source={require("../assets/cover.jpg")}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={require("../assets/profile.png")}
          />
        </View>
      </View>
      <View style={styles.header}>
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
        <TouchableOpacity style={styles.buttonlogout} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  profileContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
    justifyContent: "center",

  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  buttonlogout: {
    backgroundColor: "#3ED400",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },


});

export default EditProfile;
