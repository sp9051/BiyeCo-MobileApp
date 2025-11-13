// // Import React and Component
// import React, { useState, useEffect } from 'react';
// import {
//   // ActivityIndicator,
//   View,
//   StyleSheet,
//   Image,
//   ImageBackground,
//   Text,
// } from 'react-native';
// // import { styles } from './SplashScreenStyles';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import appName from '../../../appName';
// // import '../../../global.styles';
// // import { Title } from '../../components/title/Title';
// // import { Paragraph } from '../../components/paragraph/Desc';
// // import { Theme } from '../../constants';
// // import { Logo } from '../../components/logo/Logo';
// // import { SubTitle } from '../../components/subtitle/SubTitle';
// // import Loader from '../../components/loader/Loader';
// // import { AuthServices } from '../../services/AuthServices';

// const SplashScreen = ({ navigation, isLoggedIn, isLoading }) => {
//   //State for ActivityIndicator animation
//   const [animating, setAnimating] = useState(true);
//   // console.log(isLoggedIn)

//   useEffect(() => {
//     if (!isLoading) {
//       // Once loading is complete, perform navigation
//       navigation.reset({
//         index: 0,
//         routes: [{ name: isLoggedIn ? 'DrawerNavigationRoutes' : 'Auth' }],
//       });
//     }
//   }, [isLoading, isLoggedIn, navigation]);

//   useEffect(() => {
//     // Delay the animation for a smooth effect
//     const timer = setTimeout(() => setAnimating(false), 1000);
//     return () => clearTimeout(timer); // Cleanup timer on unmount
//   }, []);

//   return (
//     <View style={global.styles.container}>
//       <View style={global.styles.subContainer}>
//         <Logo style={{ height: 100 }} />
//         {/* <Image
//         source={require('../../../assets/Images/logo.png')}
//         style={styles.logo}
//       /> */}
//         <Title style={{ color: Theme.COLORS.HeadingTextColor, marginTop: 40 }}>
//           Heritage Health TPA
//         </Title>
//         {/* <Paragraph style={{color: Theme.COLORS.DisableTextColor}} >{appName.label}</Paragraph> */}
//         <SubTitle style={{ color: Theme.COLORS.DisableTextColor }}>
//           {appName.label}
//         </SubTitle>
//       </View>
//       <Loader animating={animating} />
//     </View>
//   );
// };

// export default SplashScreen;
