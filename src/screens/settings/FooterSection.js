import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const FooterSection = ({ onTermsPress, onPrivacyPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.version}>Version 2.1.3</Text>
            <View style={styles.linksContainer}>
                <Pressable onPress={onTermsPress}>
                    <Text style={styles.link}>Terms of Service</Text>
                </Pressable>
                <Pressable onPress={onPrivacyPress}>
                    <Text style={styles.link}>Privacy Policy</Text>
                </Pressable>
            </View>
            <Text style={styles.copyright}>© 2025 BiyeCoApp. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
        alignItems: 'center',
    },
    version: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 12,
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        marginBottom: 12,
    },
    link: {
        fontSize: 14,
        color: '#53377A',
        textDecorationLine: 'none',
    },
    copyright: {
        fontSize: 12,
        color: '#9CA3AF',
        lineHeight: 16,
    },
});

export default FooterSection;
