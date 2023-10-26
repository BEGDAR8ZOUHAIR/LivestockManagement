import React, { useState, useEffect } from "react";
import
{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollView,
} from "react-native";
// icon
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRoute } from "@react-navigation/native";

const DetailMilk = ({ navigation }) =>
{
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const route = useRoute()
    const [refresh, setRefresh] = useState(false);

    useEffect(() =>
    {
        async function fetchCattleData()
        {
            const id = route.params?.id
            console.log(id, "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
            try
            {
                const response = await fetch(`http://192.168.1.159:5000/client/getMilkById/${id}`);
                const data = await response.json();
                setId(data);
                await AsyncStorage.setItem('id', data._id);
            } catch (error)
            {
                console.error(error);
            }
            finally
            {
                setIsLoading(false);
            }
        }
        fetchCattleData();
        const intervalId = setInterval(() =>
        {
            setRefresh(!refresh);
        }, 10000);

        return () => clearInterval(intervalId);
    }, [refresh]);

    const handleDelete = async () =>
    {
        const id = route.params?.id
        try
        {
            const response = await fetch(`http://192.168.1.159:5000/client/deleteFarm/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ");
            navigation.navigate('Farms');
        } catch (error)
        {
            console.error(error);

        }
    };

    if (isLoading)
    {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#3ED400" />
            </View>
        );
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>

                <Image
                    style={styles.coverPhoto}
                    source={
                        require('../../assets/farmer.png')
                    }
                />
                <Text style={styles.nameText}></Text>

                <View style={styles.bodyContainer}>
                    <View style={styles.bodyContent}>
                        {/* date,
                        AMTotal,
                        PMTotal,
                        Total,
                        totalUsed,
                        note, */}
                        <Text style={styles.textInfo}>Date: {id.date}</Text>
                        <Text style={styles.textInfo}>AM Total: {id.AMTotal}</Text>
                        <Text style={styles.textInfo}>PM Total: {id.PMTotal}</Text>
                        <Text style={styles.textInfo}>Total: {id.Total}</Text>
                        <Text style={styles.textInfo}>Total Used: {id.totalUsed}</Text>
                        <Text style={styles.textInfo}>Note: {id.note}</Text>

                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => navigation.navigate('UpdateMilk', { id: id._id })}
                        >
                            <AntDesign name="edit" size={24} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icon}
                            onpress={handleDelete}
                        >
                            <AntDesign name="delete" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverPhoto: {
        width: '100%',
        height: 200,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    icon: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
    },
    bodyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyContent: {
        width: '100%',
        paddingHorizontal: 20,
    },
});
export default DetailMilk;

