import React, { useState, useEffect } from "react";
import
{
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,


} from "react-native";
import
  {
    useNavigation,
    useRoute
  } from "@react-navigation/native";

const UpdateAnimal = ({ navigation }) =>
{
  // const navigation = useNavigation();
  const route = useRoute();
  
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
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
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);




  
  useEffect(() =>
  {
    async function fetchUserData()
    {
      const id = route.params?.id;
      console.log(id)

      try
      {
        const response = await fetch(`http://172.16.100.121:5000/client/getCattleById/${id}`);
        const data = await response.json();
        setId(data._id);
        setName(data.name);
        setType(data.type);
        setAge(data.age);
        setGender(data.gender);
        setWeight(data.weight);
        setBirthDate(data.birthDate);
        setDateOfEntry(data.dateOfEntry);
        setObtainedFrom(data.obtainedFrom);
        setObtainedBy(data.obtainedBy);
        setStatus(data.status);
        setMother(data.mother);
        setFather(data.father);
        setNote(data.note);
        setImage(data.image);

      } catch (error)
      {
        console.error(error);
      } finally
      {
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, [refresh]);

  const handleSave = async () =>
  {

    const id = route.params?.id;
    const data = {
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
    };
    try
    {
      await fetch(`http://172.16.100.121:5000/client/updateCattle/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(data,"Data updated successfully");
      navigation.navigate(); //
    } catch (error)
    {
      console.error(error);
    }
  }

  if (isLoading)
  {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (

    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/cover.jpg")}
        />
      </View>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Type"
          value={type}
          onChangeText={(text) => setType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="
Gender"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Birth Date"
          value={birthDate}
          onChangeText={(text) => setBirthDate(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Entry"
          value={dateOfEntry}
          onChangeText={(text) => setDateOfEntry(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Obtained From"
          value={obtainedFrom}
          onChangeText={(text) => setObtainedFrom(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Obtained By"
          value={obtainedBy}
          onChangeText={(text) => setObtainedBy(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Status"
          value={status}
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
          onChangeText={(text) => setNote(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={image}
          onChangeText={(text) => setImage(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    backgroundColor: "#00ff00",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#00ff00",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default UpdateAnimal;




