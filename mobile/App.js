import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import EditProfile from './screens/profile/EditProfile';
import AddAnimal from './screens/animals/AddAnimal';
import Animals from './screens/animals/Animals';
import DetailAnimal from './screens/animals/DetailAnimal';
import UpdateAnimal from './screens/animals/UpdateAnimal';
import AddFarm from './screens/farms/AddFarm';
import Farms from './screens/farms/Farms';
import DetailFarm from './screens/farms/DetailFarm';
import UpdateFarm from './screens/farms/UpdateFarm';
import Milk from './screens/milk/Milk';
import DetailMilk from './screens/milk/DetailMilk';
import UpdateMilk from './screens/milk/UpdateMilk';
import AddMilk from './screens/milk/AddMilk';
import AddWorker from './screens/worker/AddWorker';
import Workers from './screens/worker/Workers';
// import DetailWorker from './screens/worker/DetailWorker';
// import UpdateWorker from './screens/worker/UpdateWorker';



import Nav from './components/Nav';

const Stack = createStackNavigator();

export default function App()
{
  LogBox.ignoreLogs(['Remote debugger']);

  return (


    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Nav"
            component={Nav}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="AddAnimal"
            component={AddAnimal}
            options={{
              // headerShown: false
              addAnimal: true
              
            }}
          />
          <Stack.Screen
            name="Animals"
            component={Animals}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="DetailAnimal"
            component={DetailAnimal}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="UpdateAnimal"
            component={UpdateAnimal}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="AddFarm"
            component={AddFarm}
            options={{  
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="Farms"
            component={Farms}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="DetailFarm"
            component={DetailFarm}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="UpdateFarm"
            component={UpdateFarm}
            options={{  
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="Milk"
            component={Milk}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="AddMilk"
            component={AddMilk}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="DetailMilk"
            component={DetailMilk}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="UpdateMilk"
            component={UpdateMilk}
            options={{
              // headerShown: false
              
            }}
          />
          <Stack.Screen
            name="AddWorker"
            component={AddWorker}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="Workers"
            component={Workers}
            options={{
              // headerShown: false
            }}
          />
          {/* <Stack.Screen
            name="DetailWorker"
            component={DetailWorker}
            options={{
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="UpdateWorker"
            component={UpdateWorker}
            options={{
              // headerShown: false
            }}
          /> */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});



