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
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdateAnimal = ({ navigation }) =>
{
  // name,
  //   type,
  //   age,
  //   gender,
  //   weight,
  //   birthDate,
  //   dateOfEntry,
  //   obtainedFrom,
  //   obtainedBy,
  //   status,
  //   mother,
  //   father,
  //   note,
  //   image,
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  



  return (
    <View>
      <Text>EditAnimal</Text>
    </View>
  )
}

export default UpdateAnimal