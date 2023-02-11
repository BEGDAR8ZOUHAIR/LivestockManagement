import React from 'react'
import { View, Text , Button , StyleSheet} from 'react-native'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
          <Text>LoginScreen</Text>
            <Button title="Login" onPress={() => alert('Login')} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
