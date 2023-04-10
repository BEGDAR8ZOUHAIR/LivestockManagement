import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import
{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList,
    TextInput,
} from "react-native";
import
{
    AntDesign, Entypo

} from "@expo/vector-icons";

const Farms = () =>
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
                const response = await fetch(`http://172.16.100.121:5000/client/getFarms`);
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
        const intervalId = setInterval(() =>
        {
            setRefresh(!refresh);
        }, 1000);

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
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="##3ED400"

                />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cattle}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                        <View style={styles.textContainer}>

                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.phoneText}>{item.cattlegroup}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.animalDetailsButton}
                            onPress={() => navigation.navigate("DetailFarm", { id: item._id })}
                        >
                            <Entypo
                                style={styles.animalDetailsIcon}
                                name="info-with-circle" size={24} color="#3ED400" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.addAnimal}
                onPress={() => navigation.navigate("AddFarm")}
            >
                <AntDesign
                    style={styles.addAnimalIcon}
                    name="pluscircle" size={25} color="#fff"
                />
                <Text style={styles.addAnimalText}>Add Farm</Text>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        backgroundColor: '#eee',
        padding: 8,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    textRightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        marginLeft: 16,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    phoneText: {
        fontSize: 16,
        color: '#999',
    },
    animalDetailsButton: {
        position: 'absolute',
        right: 16,
    },
    animalDetailsIcon: {
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addAnimal: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#3ED400',
        borderRadius: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addAnimalIcon: {
        marginRight: 5,
    },
    addAnimalText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },


})

export default Farms;