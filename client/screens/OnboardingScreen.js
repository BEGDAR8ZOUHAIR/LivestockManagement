import React from 'react'
import { View, Text, Button, Image,StyleSheet , TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Skip</Text>
    </TouchableOpacity>

);
const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={styles.textStyle}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
  return (
      <Onboarding
          onSkip={() => navigation.replace("Login")}
          onDone={() => navigation.navigate("Login")}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          
        
        
          pages={[
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/dd.png')}
                    //   style={{ width: 200, height: 200 }}
                  />,
                  title: 'Cattle Zoo',
                  subtitle: 'you can set your system in order to get the information about your cattle',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/dd2.png')}
                    //   style={{ width: 100, height: 100 }}
                  />,
                  title: 'Cattle Management',
                  subtitle: ' you can manage your cattle in a better way',
              },
              {
                  backgroundColor: '#fff',
                  image: <Image source={require('../assets/dd3.png')}
                    //   style={{ width: 200, height: 200 }}
                  />,
                  title: 'Cattle Health',
                  subtitle: "you can get the information about your cattle's health in a better way ",
              },
          ]}
          
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 16,
        color: '#4E5153',
        backgroundColor: '#3ED400',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
    },
})






