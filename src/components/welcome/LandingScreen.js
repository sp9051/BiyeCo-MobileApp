import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    Platform,
    AccessibilityInfo,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
// If using NativeWind, className will work. If not, convert className -> style via StyleSheet
// import { styled } from "nativewind"; // optional

// Replace with your local asset path
const LandingImage = require("./assets/bg.jpg"); // put exported frame image here
const LogoIcon = require("./assets/logo.png");   // if you exported the small purple square icon separately
const Globe = require("./assets/globe.png");
const Down = require("./assets/down.png");
const Right = require("./assets/right.png");




export default function LandingScreen() {
    const navigation = useNavigation()
    const [checked, setChecked] = useState(false);

    const toggleCheck = () => {
        setChecked((v) => !v);
        // for accessibility, announce toggle
        AccessibilityInfo.announceForAccessibility(
            !checked ? "Checkbox checked" : "Checkbox unchecked"
        );
    };

    return (
        <SafeAreaView style={styles.safe}>
            <ImageBackground
                // big full-screen subtle background (we use the exported frame as a design guide)
                source={LandingImage}
                resizeMode="cover"
                style={styles.background}
            >
                {/* top-right language pill */}
                <View style={styles.langWrap}>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Language selector"
                        style={styles.langPill}
                        onPress={() => {
                            /* open language modal */
                        }}
                    >
                        <View style={styles.langInner}>
                            <View style={styles.globeCircle}>
                                {/* tiny globe substitute (you can replace with svg icon) */}
                                {/* <Text style={styles.globeText}>🌐</Text> */}
                                <Image source={Globe} style={styles.globeText} />

                            </View>
                            <Text style={styles.langText}>EN</Text>
                            {/* <Text style={styles.langCaret}>▾</Text> */}
                            <Image source={Down} style={styles.langCaret} />

                        </View>
                    </Pressable>
                </View>

                {/* Center card container */}
                <View style={styles.cardWrap}>
                    <View style={styles.card}>
                        {/* icon square (use separate asset if available) */}
                        <View style={styles.logoBox}>
                            {/* If you exported the purple logo icon, swap Image here */}
                            <Image source={LogoIcon} style={styles.logoIcon} />
                        </View>

                        <Text style={styles.title}>Biye Co.</Text>
                        <Text style={styles.subtitle}>~Tradition Reimagined</Text>


                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginBottom: 40 }}>

                    <Text style={styles.tagline}>Built for us, by one of us!</Text>

                    {/* Terms box */}
                    <View style={styles.termsBox}>
                        <Pressable
                            onPress={toggleCheck}
                            accessibilityRole="checkbox"
                            accessibilityState={{ checked }}
                            style={styles.checkboxRow}
                        >
                            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                                {checked ? <Text style={styles.checkMark}>✓</Text> : null}
                            </View>

                            <Text style={styles.termsText}>
                                By continuing, I agree to Biye Co.’s{" "}
                                <Text style={styles.link}>Terms & Conditions</Text> and{" "}
                                <Text style={styles.link}>Privacy Policy</Text>. I confirm I’m 18 years or older.
                            </Text>
                        </Pressable>
                    </View>

                    {/* Big Continue button */}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // navigate to next screen
                            navigation.navigate('LoginScreen')
                        }}
                        accessibilityRole="button"
                        accessibilityLabel="Continue"
                    >
                        <LinearGradient
                            colors={["#53377A", "#6B4C9A"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.continueBtn}
                        >
                            <Text style={styles.continueText}>Continue</Text>
                            {/* <Text style={styles.continueArrow}>➜</Text> */}
                            <Image source={Right} style={styles.continueArrow} />

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: "#F8F6FB" },

    background: {
        flex: 1,
        justifyContent: "flex-start",
        // Add padding to simulate safe card margins visible in the screenshot
        paddingHorizontal: 18,
        paddingTop: 18,
    },

    langWrap: {
        width: "100%",
        alignItems: "flex-end",
        paddingRight: 8,
        marginTop: 8,
    },
    langPill: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 24,
        // subtle shadow
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.06,
                shadowRadius: 18,
            },
            android: { elevation: 6 },
        }),
    },
    langInner: { flexDirection: "row", alignItems: "center", },
    globeCircle: {
        // backgroundColor: "#F3EAFE",

        // borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
    globeText: {
        resizeMode: 'contain', width: 15,
        height: 15,
    },
    langText: { fontSize: 14, fontWeight: "400", color: "#2E2E3A", marginRight: 6 },
    langCaret: { color: "#2E2E3A", fontSize: 12 },

    cardWrap: {
        flex: 1,
        justifyContent: "center",
    },

    card: {
        backgroundColor: "rgba(255,255,255,0.98)",
        borderRadius: 20,
        paddingVertical: 36,
        paddingHorizontal: 32,
        alignItems: "center",
        marginHorizontal: 6,
        // shadow to match screenshot
        // ...Platform.select({
        //     ios: {
        //         shadowColor: "#6F4AB6",
        //         shadowOffset: { width: 0, height: 22 },
        //         shadowOpacity: 0.08,
        //         shadowRadius: 50,
        //     },
        //     android: { elevation: 8 },
        // }),
    },

    logoBox: {
        width: 90,
        height: 90,
        borderRadius: 20,
        backgroundColor: "#4C2B86", // purple
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 22,
        // soft inner shadow look via blur (can't on RN easily), so we rely on background color + image
    },
    logoIcon: { resizeMode: "contain" },

    title: {
        fontSize: 36,
        fontWeight: "600",
        color: "#4C2B86",
        marginBottom: 6,
        // letterSpacing mimics bold branding
        // letterSpacing: 0.2,
    },
    subtitle: { fontSize: 18, color: "#6B7280", marginBottom: 22 },

    tagline: { fontSize: 14, color: "#8B8B94", marginBottom: 22, justifyContent: 'center', textAlign: 'center' },

    termsBox: {
        width: "100%",
        backgroundColor: "#F3EAFE",
        padding: 10,
        borderRadius: 14,
        marginBottom: 18,
    },

    checkboxRow: {
        flexDirection: "row",
        gap: 0,
        alignItems: "flex-start",
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: "#CCD0D8",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        marginRight: 12,
    },
    checkboxChecked: {
        backgroundColor: "#4C2B86",
        borderColor: "#4C2B86",
    },
    checkMark: { color: "#fff", fontSize: 14 },

    termsText: {
        flex: 1,
        fontSize: 14,
        color: "#3B3E45",
        lineHeight: 20,
    },
    link: { color: "#4C2B86", fontWeight: "700" },

    continueBtn: {
        width: '100%',
        paddingVertical: 15,
        // height: 64,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // bottom shadow
        ...Platform.select({
            ios: {
                shadowColor: "#4C2B86",
                shadowOffset: { width: 0, height: 18 },
                shadowOpacity: 0.12,
                shadowRadius: 30,
            },
            android: { elevation: 5 },
        }),
    },
    continueText: { color: "#fff", fontWeight: "500", fontSize: 18, marginRight: 12 },
    continueArrow: { color: "#fff", fontSize: 18 },
});
