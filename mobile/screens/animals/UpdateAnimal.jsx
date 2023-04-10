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
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const UpdateAnimal = ({ navigation }) =>
{
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
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
  const [refresh, setRefresh] = useState(false);


  const route = useRoute();

  useEffect(() =>
  {
    async function fetchCattleData()
    {
      const id = await AsyncStorage.getItem('id');
      console.log(id);
      try
      {
        const response = await fetch(
          `http://172.16.100.121:5000/client/getCattleById/${id}`
        );
        const data = await response.json();
        setId(data);
        setName(data.name);
        setGender(data.gender);
        setAge(data.age);
        setWeight(data.weight);
        setBirthDate(data.birthDate);
        setDateOfEntry(data.dateOfEntry);
        setObtainedFrom(data.obtainedFrom);
        setObtainedBy(data.obtainedBy);
        setStatus(data.status);
        setMother(data.mother);
        setFather(data.father);
        setNote(data.note);
        setRefresh(data.refresh);
        setImage(data.image);


      } catch (error)
      {
        console.error(error);
      } finally
      {
        setIsLoading(false);
      }
    }
    fetchCattleData();
  }, [refresh]);

  async function handleUpdate()
  {
    const id = await AsyncStorage.getItem('id');
    setIsUpdating(true);

    try
    {
      await fetch(
        `http://172.16.100.121:5000/client/updateCattle/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
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
            image
          }),
        });
      navigation.navigate('DetailAnimal', { id, setRefresh });
    } catch (error)
    {
      console.error(error);
    }
  }



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
        {/* <Image style={styles.coverPhoto} source={{ uri: id.image }} /> */}
        <View style={styles.bodyContainer}>
          <View style={styles.bodyContent}>
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
              onChangeText={(text) => setAge(text)}
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
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleUpdate}
            >
              <Text style={styles.buttonText}>Update</Text>
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
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    padding: 30,
    borderRadius: 5,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,

  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#3ED400',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },

});

export default UpdateAnimal;




