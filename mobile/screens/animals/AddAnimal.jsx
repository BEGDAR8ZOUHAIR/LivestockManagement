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
// import { Picker } from '@react-native-community/picker';

const AddAnimal = () =>
{

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [dateOfEntry, setDateOfEntry] = useState("");
    const [obtainedFrom, setObtainedFrom] = useState("");
    const [obtainedBy, setObtainedBy] = useState("");
    const [status, setStatus] = useState("");
    const [mother, setMother] = useState("");
    const [father, setFather] = useState("");
    const [note, setNote] = useState("");
    const [image, setImage] = useState("");




    const handleAddAnimal = async () =>
    {
        try
        {
            const res = await fetch("http://192.168.1.159:5000/client/createCattle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    type,
                    age,
                    gender,
                    weight,
                    birthDate,
                    dateOfEntry,
                    obtainedFrom,
                    obtainedBy,
                    status,
                    mother,
                    father,
                    note,
                    image,

                }),
            });
            const data = await res.json();
            if (data.error)
            {
                Alert.alert("Error", data.error, [{ text: "OK" }]);

            } else
            {
                navigation.navigate("Home");
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
                        placeholder="Gender"
                        value={gender}
                        onChangeText={(text) => setGender(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Age"
                        value={age}
                        type="number"
                        onChangeText={(text) => setAge(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Weight"
                        value={weight}
                        type="number"
                        onChangeText={(text) => setWeight(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Birth Date"
                        value={birthDate}
                        type="date"
                        onChangeText={(text) => setBirthDate(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Date Of Entry"
                        value={dateOfEntry}
                        type="date"
                        onChangeText={(text) => setDateOfEntry(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Obtained From"
                        value={obtainedFrom}
                        type="text"
                        onChangeText={(text) => setObtainedFrom(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Obtained By"
                        value={obtainedBy}
                        type="text"
                        onChangeText={(text) => setObtainedBy(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Status"
                        value={status}
                        type="text"
                        onChangeText={(text) => setStatus(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mother"
                        value={mother}
                        onChangeText={(text) => setMother(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Father"
                        value={father}
                        onChangeText={(text) => setFather(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Note"
                        value={note}
                        type="text"
                        onChangeText={(text) => setNote(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Image"
                        value={image}
                        onChangeText={(text) => setImage(text)}
                    />
                    <TouchableOpacity
                        style={styles.buttonlogout}
                        onPress={handleAddAnimal}
                    >
                        <Text style={styles.buttonText}>Add Animal</Text>
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
    header: {
        padding: 20,
        backgroundColor: "#fff",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",

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

export default AddAnimal