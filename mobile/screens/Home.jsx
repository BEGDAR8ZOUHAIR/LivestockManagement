import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Weather from '../components/Weather'
import Dyas from '../components/Days'
import { useNavigation } from "@react-navigation/native";

const Home = () =>
{
  const navigation = useNavigation();

  return (
    
    
    <View style={styles.container}>
      < Weather />
      <Dyas />
      <TouchableOpacity style={styles.menuBox}
        onPress={() => navigation.navigate("Animals")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/ajal.png")}
        />


        <Text style={styles.info}>Cattle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={require("../assets/milk.png")}
        />
        <Text style={styles.info}>milk Records</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={require("../assets/tractor.png")}
        />
        <Text style={styles.info}>Ferme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={require("../assets/nabta.png")}
        />
        <Text style={styles.info}>Vente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={require("../assets/sad.png")}
        />
        <Text style={styles.info}>Farm SetUp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={require("../assets/boot.png")}
        />
        <Text style={styles.info}>Workers</Text>
      </TouchableOpacity>
    </View>
    
    
  

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    backgroundColor: '#fff',
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
  },
  icon: {
    width: 70,
    height: 70,
  },
  info: {
    fontSize: 15,
    color: '#000',
  },

})


export default Home;




