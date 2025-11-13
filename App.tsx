/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />

//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './src/screens/LoginForm';
import InputDesign from './src/components/getstarted/InputDesign';
import LoginScreen from './src/components/signin-up/LoginScreen';
import WelcomeScreen from './src/components/welcome/WelcomeScreen';
import LandingScreen from './src/components/welcome/LandingScreen';
import SplashScreen from './src/screens/SplashScreen';
import BasicDetailsForm from './src/screens/profile-creation/basicdt/BasicDetailsForm';
import ContactDetailsForm from './src/screens/profile-creation/contactdt/ContactDetailsForm';
import AboutMe from './src/screens/profile-creation/aboutme/AboutMe';
import HomeScreen from './src/screens/home/HomeScreen';






import "./global.css"


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="Example" component={Example} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="LandingScreen" component={LandingScreen} />

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="InputDesign" component={InputDesign} />
        <Stack.Screen name="BasicDetailsForm" component={BasicDetailsForm} />
        <Stack.Screen name="ContactDetailsForm" component={ContactDetailsForm} />
        <Stack.Screen name="AboutMe" component={AboutMe} />



        <Stack.Screen name="HomeScreen" component={HomeScreen} />





        <Stack.Screen name="Login" component={LoginForm} />
        {/* <Stack.Screen name="EnterApp" component={EnterAppScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;