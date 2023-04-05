import React, { useState, useEffect } from "react";
import
{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList,
    Modal,
    ScrollView,
} from "react-native";
import
    {
        AntDesign,
        Entypo

    } from "@expo/vector-icons";
import { useNavigation , useRoute} from "@react-navigation/native";

const DetailAnimal = ({ navigation }) =>
{
   
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const route = useRoute()

    useEffect(() =>
    {
        async function fetchCattleData()
        {
            const id = route.params?.id 
            try
            {
                const response = await fetch(`http://172.16.100.121:5000/client/getCattleById/${id}`);
                const data = await response.json();
                setId(data);
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
    }, []);

    if (isLoading)
    {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#3ED400" />
            </View>
        );
    }

    const handleUpdate = async (updatedData) =>
    {
        try
        {
            const response = await fetch(
                `http://172.16.100.121:5000/client/updateCattle/${id.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                }
            );
            const data = await response.json();
            setId(data);
            setIsEditing(false);
        } catch (error)
        {
            console.error(error);
        }
    };

    // Function to handle deleting the animal
    const handleDelete = async () =>
    {
        try
        {
            const response = await fetch(
                `http://172.16.100.121:5000/client/deleteCattle/${id.id}`,
                {
                    method: "DELETE",
                }
            );
            setIsDeleting(false);
            navigation.goBack(); // Navigate back to previous screen after deletion
        } catch (error)
        {
            console.error(error);
        }
    };

 
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>

                <Image
                    style={styles.coverPhoto}
                    source={{uri: id.image}}
                />
                <Text style={styles.nameText}>{id.name}</Text>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.textInfo}>ID: {id.id}</Text>
                        <Text style={styles.textInfo}>Name: {id.name}</Text>
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
                    {/* update  */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate("UpdateAnimal", { id: id.id })}
                    >
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                    {/* delete */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate("DeleteAnimal", { id: id.id })}
                    >
                        <Text style={styles.buttonText}>Delete</Text>   
                    </TouchableOpacity>

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
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    bodyContent: {
        flex: 1,
        padding: 30,
    },
    
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#3ED400",
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },










});
export default DetailAnimal;




