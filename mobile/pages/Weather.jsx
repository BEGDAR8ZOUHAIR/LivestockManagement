import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import * as Location from "expo-location";
import axios from "axios";

import { API_KEY } from "../utils/weatherApiKey";

const hours = [
  "9:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
  "00:00",
  "03:00",
  "06:00",
];

const Weather = () => {
  const [city, setCity] = useState("Safi");
  const [weather, setWeather] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  // get weather for current  loaction =====================================================

  const getCurentWeather = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied"); // if permission is denied , show alert
        // return;
      }
      // get location
      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      Alert.alert("Hello", " this city does not exist");
    }
  };
  useEffect(() => {
    getCurentWeather();
  }, []);

  // get weather for searched city =====================================================
  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      Alert.alert("Hello", " this city does not exist");
    }
  };
  //  get weather for each hour =====================================================
  const getWeatherForHour = async (hour) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeatherData((prevData) => [
      ...prevData,
      { hour, weather: response.data },
    ]);
  };

  const fetchWeatherData = async () => {
    setWeatherData([]);
    hours.forEach(async (hour) => await getWeatherForHour(hour));
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  // ===================================================================================

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={city}
            placeholder="Search"
            onChangeText={(text) => setCity(text)}
          />
          <EvilIcons
            style={styles.icon}
            onPress={getWeather}
            name="check"
            size={35}
            color="black"
          />
        </View>

        {Object.keys(weather).length > 0 ? (
          <>
            <View style={styles.weatherContainer}>
              <Text style={styles.temp}>
                {Math.round(weather?.main?.temp - 273.15)}°C
              </Text>

              <Text style={styles.typeWeather}>
                {weather?.weather[0]?.main}
              </Text>
            </View>
       
            <FlatList
              extraData={weatherData}
              removeClippedSubviews={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={weatherData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <View style={styles.hourContainer}>
                    <Text style={styles.hour}>{item.hour}</Text>
                    <Text style={styles.hour}>
                      {Math.round(item.weather?.main?.temp - 273.15)}°C
                    </Text>
                    <Image
                      style={styles.hourIcon}
                      source={{
                        uri: `http://openweathermap.org/img/wn/${item.weather?.weather[0]?.icon}.png`,
                      }}
                    />
                  </View>
                );
              }}
            />
          </>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  container: {
    position: "relative",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 40,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  textInput: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  weatherContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  temp: {
    fontSize: 20,
   
  },
  typeWeather: {
    fontSize: 20,
    marginHorizontal: 5,
  
  },
 
  hourContainer: {
    justifyContent: "space-between",
    marginHorizontal: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    marginTop: 10,
    Opacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    marginBottom: 10,
  },
  hour: {
    marginHorizontal: 5,
    textAlign: "center",
  },
  hourIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
});

export default Weather;
