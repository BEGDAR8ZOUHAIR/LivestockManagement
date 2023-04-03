import
{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Alert,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import
{
    EvilIcons,
} from "@expo/vector-icons";

import * as Location from "expo-location";
import axios from "axios";

import { API_KEY } from "../utils/weatherApiKey";


const Weather = () =>
{
    const [city, setCity] = useState("Safi");
    const [weather, setWeather] = useState({});

    const getCurentWeather = async () =>
    {
        try
        {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted")
            {
                Alert.alert("Permission to access location was denied"); // if permission is denied , show alert

            }

            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`
            );
            setWeather(response.data);
        } catch (error)
        {
            Alert.alert("Hello", " this city does not exist");
        }
    };
    useEffect(() =>
    {
        getCurentWeather();
    }, []);

    const getWeather = async () =>
    {
        if (!city.trim()) return;

        try
        {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            );
            setWeather(response.data);
        } catch (error)
        {
            Alert.alert("Hello", " this city does not exist");
        }
    };

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
                        <Image
                            style={styles.icons}
                            source={require("../assets/falah.png")}
                        />
                    </View>
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
        right: 20,
        top: "50%",
        transform: [{ translateY: -10 }],
    },
    textInput: {
        width: 330,
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
        alignItems: "center",
        margin: 6,
    },
    temp: {
        fontSize: 20,
    },
    typeWeather: {
        fontSize: 20,
        marginHorizontal: 5,
        fontWeight: "bold",

    },
    icons: {
        width: 30,
        height: 30,
        marginLeft: 160,

        
    },


});

export default Weather;
