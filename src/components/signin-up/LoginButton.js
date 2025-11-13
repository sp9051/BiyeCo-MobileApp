import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";


export const LoginButton = ({ onPress, title = "Login" }) => {
  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className=" mb-4"
    >
      <LinearGradient
        colors={["#53377A", "#6B4C9A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.continueBtn}
      >
        <Text style={styles.continueText} className="text-white text-center">
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LoginButton;

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
