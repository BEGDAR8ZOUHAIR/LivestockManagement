import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Weather from '../components/Days'

const Settings = () =>
{
  return (
    <View style={styles.container}>
      < Weather />
      <Text>Settings</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default Settings

