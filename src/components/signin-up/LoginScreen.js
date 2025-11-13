import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from './BackButton';
import InputField from './InputField';
import LoginButton from './LoginButton';
import LinkButton from './LinkButton';
import SignUpPrompt from './SignUpPrompt';
import { useNavigation } from '@react-navigation/native';

const LogoIcon = require("../welcome/assets/logo.png");

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const handleEmailChange = (text) => setEmail(text);
    const handlePasswordChange = (text) => setPassword(text);
    const handleLogin = () => console.log('Login clicked', { email, password });
    const handleForgotPassword = () => console.log('Forgot password clicked');
    const handleStartProfileCreation = () => navigation.navigate('InputDesign');
    const handleBackButton = () => {
        navigation.goBack();
        console.log('Back button clicked');
    };

    return (
        <SafeAreaView className="flex-1 bg-white px-6">
            {/* Main layout: top header, centered form, bottom buttons */}
            <View className="flex-1 justify-between">

                {/* Header */}
                <View className="flex-row items-center py-6 position-relative justify-center">
                    <BackButton onPress={handleBackButton} />
                    {/* <View className="flex-1 ml-4 justify-center"> */}
                    <Text className="text-2xl font-bold text-gray-900 text-center">Login</Text>
                    {/* </View> */}
                </View>

                {/* Centered form */}
                <View className="flex-1 justify-between items-center">
                    <View style={styles.logoBox}>
                        <Image source={LogoIcon} style={styles.logoIcon} />
                    </View>

                    <View className="w-full">
                        <InputField
                            label="Email or User ID"
                            placeholder="Enter your email or user ID"
                            value={email}
                            onChangeText={handleEmailChange}
                            type="email"
                        />

                        <InputField
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry={!isPasswordVisible}
                            showVisibilityToggle={true}
                            onToggleVisibility={togglePasswordVisibility}
                        />

                        <LinkButton
                            onPress={handleForgotPassword}
                            title="Forgot Password?"
                            textStyle="text-blue-600 text-right mt-2"
                        />
                    </View>
                </View>

                {/* Bottom section */}
                <View className="mt-6 mb-4" style={{ marginBottom: 40 }}>
                    <LoginButton onPress={handleLogin} />
                    <SignUpPrompt onPress={handleStartProfileCreation} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    logoBox: {
        width: 90,
        height: 90,
        borderRadius: 20,
        // padding: 40,
        backgroundColor: "#4C2B86", // purple
        alignItems: "center",
        justifyContent: "center",
        marginTop: 52,
    },
    logoIcon: {
        width: 90,
        height: 90,
        resizeMode: "contain",
    },
});
