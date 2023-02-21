import React from 'react'
import { View, Text, StyleSheet } from "react-native";

import Weather from './Weather'

const Home = () => {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
});




