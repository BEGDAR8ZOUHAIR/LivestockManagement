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


const UpdateMilk = ({ navigation }) =>
{
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [date, setDate] = useState("");
  const [AMTotal, setAMTotal] = useState("");
  const [PMTotal, setPMTotal] = useState("");
  const [Total, setTotal] = useState("");
  const [totalUsed, setTotalUsed] = useState("");
  const [note, setNote] = useState("");


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
          `http://192.168.1.159:5000/client/getMilkById/${id}`
        );
        const data = await response.json();
        setId(data);
        setDate(data.date);
        setAMTotal(data.AMTotal);
        setPMTotal(data.PMTotal);
        setTotal(data.Total);
        setTotalUsed(data.totalUsed);
        setNote(data.note);


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
        `http://192.168.1.159:5000/client/updateMilk/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date,
            AMTotal,
            PMTotal,
            Total,
            totalUsed,
            note,
          }),
        });
      navigation.navigate('DetailMilk', { id, setRefresh });
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
              placeholder="Date"
              value={date}
              onChangeText={(text) => setDate(text)}
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
            <TextInput
              style={styles.input}
              placeholder="Note"
              value={note}
              onChangeText={(text) => setNote(text)}
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

export default UpdateMilk;




