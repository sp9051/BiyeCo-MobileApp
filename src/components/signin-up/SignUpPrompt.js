import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from "react-native-linear-gradient";

const ArrowIcon = () => (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
        <Path
            d="M15.4195 9.79473C15.859 9.35527 15.859 8.6416 15.4195 8.20215L9.79453 2.57715C9.35508 2.1377 8.64141 2.1377 8.20195 2.57715C7.7625 3.0166 7.7625 3.73027 8.20195 4.16973L11.9109 7.8752H1.125C0.502734 7.8752 0 8.37793 0 9.0002C0 9.62246 0.502734 10.1252 1.125 10.1252H11.9074L8.20547 13.8307C7.76602 14.2701 7.76602 14.9838 8.20547 15.4232C8.64492 15.8627 9.35859 15.8627 9.79805 15.4232L15.423 9.79824L15.4195 9.79473Z"
            fill="white"
        />
    </Svg>
);

export const SignUpPrompt = ({ onPress }) => {
    return (
        <View className="mt-4">
            <View className="mb-8">
                <Text className="text-gray-600 text-center text-base">
                    Don't have an account?{' '}
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                className="flex-row items-center justify-center shadow-sm"
            >
                <LinearGradient
                    colors={["#53377A", "#6B4C9A"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.continueBtn}
                >
                    <Text style={styles.continueText} className="text-white mr-3">
                        Start Profile Creation
                    </Text>
                    <ArrowIcon />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpPrompt;


const styles = StyleSheet.create({
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
    continueText: { color: "#fff", fontWeight: "500", fontSize: 16, marginRight: 12 },
    continueArrow: { color: "#fff", fontSize: 16 },
});
