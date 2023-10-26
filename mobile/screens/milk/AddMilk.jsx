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

const AddMilk = () =>
{

    const navigation = useNavigation();
    const [date, setDate] = useState("");
    const [AMTotal, setAMTotal] = useState("");
    const [PMTotal, setPMTotal] = useState("");
    const [Total, setTotal] = useState("");
    const [totalUsed, setTotalUsed] = useState("");
    const [type, setType] = useState("");
    const [note, setNote] = useState("");



    const handleAddFarm = async () =>
    {
        try
        {
            const res = await fetch("http://192.168.1.159:5000/client/createMilk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    date,
                    type,
                    AMTotal,
                    PMTotal,
                    Total,
                    totalUsed,
                    note,

                }),
            });
            const data = await res.json();
            if (data.error)
            {
                Alert.alert("Error", data.error, [{ text: "OK" }]);

            } else
            {
                navigation.navigate("Milk");
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
                        placeholder="Date"
                        value={date}
                        onChangeText={(text) => setDate(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Type"
                        value={type}
                        onChangeText={(text) => setType(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="AM Total"
                        value={AMTotal}
                        onChangeText={(text) => setAMTotal(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="PM Total"
                        value={PMTotal}
                        onChangeText={(text) => setPMTotal(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Total"
                        value={Total}
                        onChangeText={(text) => setTotal(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Total Used"
                        value={totalUsed}
                        onChangeText={(text) => setTotalUsed(text)}
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

export default AddMilk;