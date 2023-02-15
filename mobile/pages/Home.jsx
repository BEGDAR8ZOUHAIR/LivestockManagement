import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image , Text } from 'react-native';

const App = () => {
 

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


