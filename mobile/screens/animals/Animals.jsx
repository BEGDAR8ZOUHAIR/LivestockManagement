import React, { useState , useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import
{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    ActivityIndicator,
    FlatList,
} from "react-native";

const Animals = () =>
{
    const navigation = useNavigation();
    const [cattle, setCattle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() =>
    {
        async function fetchCattleData()
        {

            try
            {
                const response = await fetch(`http://172.16.100.121:5000/client/getCattle`);
                const data = await response.json();
                setCattle(data);
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

        // Refresh the screen every 10 seconds
        const intervalId = setInterval(() =>
        {
            setRefresh(!refresh);
        }, 1000);

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, [refresh]);

    if (isLoading)
    {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
          
            <View style={styles.body}>
                <FlatList
                
                    data={cattle}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.animal}
                            onPress={() =>
                                navigation.navigate("Animal", {
                                    animalId: item._id,
                                })
                              
                            }
                        >   
                            <Image
                                style={styles.animalImage}
                                source={{ uri: item.image }}
                            />

                            <Text style={styles.animalText}>{item.name}</Text>
                            <Text style={styles.animalGender}>{item.gender}</Text>
                            <Text style={styles.animalStatus}>{item.status}</Text>
                           
                        </TouchableOpacity>
                    )}
                />
                {/* add Animal */}
                <TouchableOpacity
                    style={styles.addAnimal}
                    onPress={() => navigation.navigate("AddAnimal")}
                >
                    <Text style={styles.addAnimalText}>Add Animal</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
//   flat list tow columns
    container: {
        flex: 1,
    },
 
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
    },
    animal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        margin: 10,
        padding: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        // width: "80%",
    },
    
    animalImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    animalText: {
        
        marginLeft: 10,
        fontWeight: "bold",
    },
    animalGender: {
        marginLeft: 10,
        fontWeight: "bold",

       
    },
    animalStatus: {
        marginLeft: 10,
        fontWeight: "bold",
        color: "red",
        
    },

    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    addAnimal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        margin: 10,
        padding: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        // width: "80%",
        position: "absolute",
        bottom: 10,
        right: 10,

    },
    addAnimalText: {
        marginLeft: 10,
        fontWeight: "bold",
        color: "green",

    },





    



    


   
   
});

export default Animals;

        
                          
        
  