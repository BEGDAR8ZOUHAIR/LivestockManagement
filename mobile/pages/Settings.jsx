import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';

const App = () =>
{

  const [currentDate, setCurrentDate] = useState('');
  const [daysOfWeek, setDaysOfWeek] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() =>
  {
    const date = new Date();
    const dayIndex = date.getDay();
    const dayName = daysOfWeek[dayIndex];
    setCurrentDate(date.toLocaleString());
    setCurrentDay(dayName);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       
        <FlatList
          data={daysOfWeek}
          renderItem={({ item }) => (
            <View style={[styles.dayOfWeekItem, currentDay === item && styles.currentDayOfWeekItem]}>
              <Text style={styles.textStyle}>
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  dayOfWeekItem: {
    backgroundColor: '#fff',
    width: 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    marginTop: 20,
  },
  currentDayOfWeekItem: {
    backgroundColor: '#3ED400',
  },
  
});

export default App;
