// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, FlatList , ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// // burger menu
// import { DrawerActions } from '@react-navigation/native';

// // ajouter le bouton burger menu

// const DashboardScreen = () => {
//   const navigation = useNavigation();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch('http://192.168.10.37:5000/scouter/getScouter')
//   //     .then((response) => response.json())
//   //     .then((json) => {
//   //       setUsers(json);
//   //       setLoading(false);
//   //     }
//   //     )
//   //     .catch((error) => console.error(error))
//   //     .finally(() => setLoading(false));
//   // }, []);

//   return (
//   <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Dashboard</Text>
//         <Icon
//           name='menu'
//           color='#fff'
//           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}

//         />

//       </View>
//       <ScrollView>
//         <FlatList
//           data={users}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Card>
//               <Card.Title>{item.nom}</Card.Title>
//               <Card.Divider />
//               <Text style={{ marginBottom: 10 }}>
//                 {item.description}
//               </Text>
//               <Button
//                 icon={<Icon name='code' color='#ffffff' />}
//                 buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
//                 title='VIEW NOW' />
//             </Card>
//           )}
//         />
//       </ScrollView>
//     </View>
//   );
// };

import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Icon
          name="menu"
          color="#fff"
          onPress={() => {
            setIsDrawerOpen(true);
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      </View>
      <ImageBackground
        source={require("../assets/farmer.png")}
        style={{ width: "100%", height: "100%"  , resizeMode: "cover" , justifyContent: "center" , opacity: 0.7}}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#3ED400",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  
});

export default DashboardScreen;
