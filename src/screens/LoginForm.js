import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import TabButton from '../components/TabButton';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import ActionButton from '../components/ActionButton';
import EmailIcon from '../components/EmailIcon';

const LoginForm = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleLogin = () => {
        console.log('Login clicked', {
            email: email,
            password: password,
        });
    };

    const handleSignUp = () => {
        console.log('Sign up clicked');
    };

    const handleForgotPassword = () => {
        console.log('Forgot password clicked');
    };

    const handleBack = () => {
        console.log('Back clicked');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Header with Back Button */}
                <View style={styles.header}>
                    <BackButton onPress={handleBack} />
                </View>

                {/* Tab Navigation */}
                <View
                    style={styles.tabContainer}
                    accessibilityRole="tablist"
                >
                    <View style={styles.tabButton}>
                        <TabButton
                            title="Login"
                            isActive={activeTab === 'login'}
                            onPress={() => handleTabChange('login')}
                        />
                    </View>
                    <View style={styles.tabButton}>
                        <TabButton
                            title="Sign Up"
                            isActive={activeTab === 'signup'}
                            onPress={() => handleTabChange('signup')}
                        />
                    </View>
                </View>

                {/* Form Content */}
                <View
                    style={styles.formContainer}
                // accessibilityRole="form"
                >
                    {/* Email Input */}
                    <InputField
                        label="Email or User ID"
                        placeholder="Enter your email or user ID"
                        value={email}
                        onChangeText={handleEmailChange}
                        icon={<EmailIcon />}
                        keyboardType="email-address"
                    />

                    {/* Password Input */}
                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={handlePasswordChange}
                        showPassword={showPassword}
                        onToggleVisibility={togglePasswordVisibility}
                    />

                    {/* Forgot Password Link */}
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity
                            onPress={handleForgotPassword}
                            accessibilityRole="button"
                            accessibilityHint="Reset your password"
                        >
                            <Text style={styles.forgotPasswordText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionContainer}>
                        <ActionButton
                            title="Login"
                            onPress={handleLogin}
                            variant="primary"
                            accessibilityHint="Sign in to your account"
                        />

                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpPrompt}>
                                Don't have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={handleSignUp}
                                accessibilityRole="button"
                                accessibilityHint="Create a new account"
                                style={styles.signUpButton}
                            >
                                <Text style={styles.signUpText}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    content: {
        padding: 24,
    },
    header: {
        marginBottom: 24,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F3F4F6',
        borderRadius: 8,
        padding: 4,
        marginBottom: 32,
    },
    tabButton: {
        flex: 1,
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 24,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    forgotPasswordContainer: {
        marginBottom: 24,
    },
    forgotPasswordText: {
        color: '#53377A',
        fontSize: 14,
        fontWeight: '500',
    },
    actionContainer: {
        gap: 16,
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    signUpPrompt: {
        color: '#6B7280',
        fontSize: 14,
    },
    signUpButton: {
        marginLeft: 4,
    },
    signUpText: {
        color: '#53377A',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default LoginForm;
