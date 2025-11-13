import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Replace with your logo asset
const LogoIcon = require('../components/welcome/assets/logo.png');
const LandingImage = require("../components/welcome/assets/splashbg.jpg"); // put exported frame image here


export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('LandingScreen'); // redirect after 1 second
        }, 1000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView className="flex-1">
            <LinearGradient
                colors={['#4C2B86', '#53377A', '#6B4C9A']}
                style={styles.gradient}
            >


                <View style={styles.container}>
                    {/* Centered Logo */}
                    <View></View>
                    <View style={styles.centerContent}>
                        <View style={styles.logoBox}>
                            <Image source={LogoIcon} style={styles.logoIcon} />
                        </View>
                        <Text style={styles.title}>Biye Co.</Text>
                        <Text style={styles.subtitle}>~Tradition Reimagined</Text>
                    </View>

                    {/* Bottom caption */}
                    <Text style={styles.tagline}>Built for us, by one of us!</Text>
                </View>
                {/* </ImageBackground> */}
            </LinearGradient>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        // backgroundColor: '#53377A'
        // Add padding to simulate safe card margins visible in the screenshot
        // paddingHorizontal: 18,
        // paddingTop: 18,
    },
    gradient: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 60,
    },
    centerContent: {
        alignItems: 'center',
    },
    logoBox: {
        width: 90,
        height: 90,
        borderRadius: 25,
        // backgroundColor: '#3B1E70',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22,
    },
    logoIcon: {
        // width: 60,
        // height: 60,
        resizeMode: 'contain',
        // tintColor: '#fff',
    },
    title: {
        fontSize: 36,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 6,
        // letterSpacing mimics bold branding
        // letterSpacing: 0.2,
    },
    subtitle: { fontSize: 18, color: "#6B7280", marginBottom: 22 },

    tagline: { fontSize: 14, color: "#8B8B94", marginBottom: 22, justifyContent: 'center', textAlign: 'center' },

});
