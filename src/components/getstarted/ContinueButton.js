import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowRightIcon from './ArrowRightIcon';
import LinearGradient from "react-native-linear-gradient";

const ContinueButton = ({ onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            className={`flex-row items-center justify-center`}
            activeOpacity={0.9}
            style={{ marginBottom: 40 }}

            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"
            accessibilityLabel="Continue to next step"
            accessibilityState={{ disabled }}
        >
            <LinearGradient
                colors={["#53377A", "#6B4C9A"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.continueBtn}
            >
                <Text style={styles.continueText} className={` mr-2 ${disabled ? 'text-gray-500' : 'text-white'
                    }`}>
                    Continue
                </Text>
                <ArrowRightIcon
                    size={20}
                    color={disabled ? '#6B7280' : '#FFFFFF'}
                />
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default ContinueButton;
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
