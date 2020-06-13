import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Input } from 'react-native'
import { Landing, Login, Register } from "./app/components"
// import Navigator from "./routes/home-stack"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {

  return (<>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  )
}



