
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Card, Icon } from "react-native-elements";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [scooters, setScooters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadScooters = async () => {
    try {
      const response = await fetch(
        "http://192.168.9.30:5000/client/getClients" // for my phone wifi
      );
      const text = await response.text();
      const data = JSON.parse(text);
      setScooters(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadScooters();
  }, []);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const renderScooter = ({ item }) => {
    return <ScooterCard key={item.id} scooter={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Icon name="menu" color="#fff" onPress={openDrawer} />
      </View>
      <ImageBackground
        source={require("../assets/dashboard.png")}
        style={styles.bgImage}
      >
        {isLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <ScrollView
            style={styles.scrollView}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListEmptyComponent={() => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text>No items to display</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          >
            {scooters.map((scooter, index) => (
              <ScooterCard key={`${index}-${scooter.id}`} scooter={scooter} />
            ))}
          </ScrollView>
        )}
      </ImageBackground>
    </View>
  );
};

const ScooterCard = ({ scooter }) => {
  return (
    
    <Card style={styles.card}>
      <Card.Title>{scooter.fullName}</Card.Title>
      <Card.Divider />
      <Text style={styles.cardText}>CIN: {scooter.cin}</Text>
      <Text style={styles.cardText}>Phone Number: {scooter.phoneNumber}</Text>
      <Text style={styles.cardText}>Email: {scooter.email}</Text>
    
    </Card>
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
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    borderRadius: 10,
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardText: {
    marginBottom: 10,
  },
  cardBattery: {
    marginBottom: 10,
    color: "#3ED400",
  },
  success: {
    marginBottom: 10,
    color: "#3ED400",
  },
  failed: {
    marginBottom: 10,
    color: "#FF0000",
  },
  reserveButton: {
    backgroundColor: "#000",
    borderRadius: 10,

    padding: 10,

    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 16,
  },
  loadingText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 20,
  },
});

export default ProfileScreen;


