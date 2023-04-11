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

const DetailAnimal = ({ navigation }) =>
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
                const response = await fetch(`http://172.16.100.121:5000/client/getCattleById/${id}`);
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
                    source={{ uri: id.image }}
                />
                <Text style={styles.nameText}>{id.name}</Text>
                {/* icons update */}


                <View style={styles.bodyContainer}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.textInfo}>Name: {id.name}</Text>
                        <Text style={styles.textInfo}>Name: {id.gender}</Text>
                        <Text style={styles.textInfo}>Age: {id.age}</Text>
                        <Text style={styles.textInfo}>Weight: {id.weight}</Text>
                        <Text style={styles.textInfo}>Birth Date: {id.birthDate}</Text>
                        <Text style={styles.textInfo}>Date Of Entry: {id.dateOfEntry}</Text>
                        <Text style={styles.textInfo}>Obtained From: {id.obtainedFrom}</Text>
                        <Text style={styles.textInfo}>Obtained By: {id.obtainedBy}</Text>
                        <Text style={styles.textInfo}>Status: {id.status}</Text>
                        <Text style={styles.textInfo}>Mother: {id.mother}</Text>
                        <Text style={styles.textInfo}>Father: {id.father}</Text>
                        <Text style={styles.textInfo}>Note: {id.note}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => navigation.navigate('UpdateAnimal', { id: id._id })}
                        >
                            <AntDesign name="edit" size={24} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icon}
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
export default DetailAnimal;




