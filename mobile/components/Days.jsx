import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import
    {
        SafeAreaView, StyleSheet, View, Text, FlatList, Image,
        TouchableOpacity,
    } from 'react-native';

const Days = () =>
{

    const [currentDate, setCurrentDate] = useState('');
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() =>
    {
        const date = new Date();
        const dayIndex = date.getDay();
        const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex];
        setCurrentDate(date.toLocaleString());
        setCurrentDay(dayName);

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const newDaysOfWeek = [];
        for (let i = 1; i <= daysInMonth; i++)
        {
            const dayIndex = new Date(date.getFullYear(), date.getMonth(), i).getDay();
            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex];
            newDaysOfWeek.push({ name: dayName, number: i });
        }
        setDaysOfWeek(newDaysOfWeek);
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.icons}>
                    <Ionicons name="today" size={30} color="#3ED400" />
                </TouchableOpacity>
                <FlatList
                    data={daysOfWeek}
                    renderItem={({ item }) => (
                        <View style={[styles.dayOfWeekItem, currentDay === item.name && styles.currentDayOfWeekItem]}>
                            <Text style={styles.textStyle}>
                                {item.name} {item.number}
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6,
    },
  dayOfWeekItem: {
    backgroundColor: '#fff',
    width: 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  currentDayOfWeekItem: {
      backgroundColor: '#3ED400',
      color: '#fff',
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
    },
    icons: {
        marginLeft: 10,
    },



});

export default Days;