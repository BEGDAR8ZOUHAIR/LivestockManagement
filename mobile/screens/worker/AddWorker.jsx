import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import
{
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    ActivityIndicator,
} from "react-native";

const AddWorker = () =>
{

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");






    const handleAddFarm = async () =>
    {
        try
        {
            const res = await fetch("http://192.168.1.159:5000/client/createWorker", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    address,
                    note,


                }),
            });
            const data = await res.json();
            if (data.error)
            {
                Alert.alert("Error", data.error, [{ text: "OK" }]);

            } else
            {
                navigation.navigate("Workers");
            }
        } catch (err)
        {
            console.log(err);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.form}>

                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Note"
                        value={note}
                        onChangeText={(text) => setNote(text)}
                    />

                    <TouchableOpacity
                        style={styles.buttonlogout}
                        onPress={() => handleAddFarm()}
                    >
                        <Text style={styles.buttonText}>Add Milk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    input: {
        width: "100%",
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 10,
    },

    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    headerContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    buttonlogout: {
        width: "100%",
        backgroundColor: "#3ED400",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
    },

});

export default AddWorker;