import
{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Alert,
    FlatList,
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

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Weather = () =>
{
    const [city, setCity] = useState("Safi");
    const [weather, setWeather] = useState({});
    const [weatherData, setWeatherData] = useState([]);

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

    const getWeatherForDay = async (day) =>
    {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        setWeatherData((prevData) => [
            ...prevData,
            { day, weather: response.data },
        ]);
    };

    const fetchWeatherData = async () =>
    {
        setWeatherData([]);
        daysOfWeek.forEach(async (day) => await getWeatherForDay(day));
    };

    useEffect(() =>
    {
        fetchWeatherData();
    }, [city]);

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
                        renderItem={({ item }) =>
                        {
                            return (
                                <View style={styles.dayContainer}>
                                    <Text style={styles.day}>{item.day}</Text>
                                    <Text style={styles.day}>
                                        {Math.round(item.weather?.main?.temp - 273.15)}°C
                                    </Text>
                                    <Image
                                        style={styles.dayIcon}
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
    dayContainer: {
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
    day: {
        marginHorizontal: 5,
        textAlign: "center",
    },
    dayIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 20,
    },
});

export default Weather;
