import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from './Icons';

const SocialLinks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Find Us On</Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <FacebookIcon size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <InstagramIcon size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <TikTokIcon size={28} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <YouTubeIcon size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212529',
        marginBottom: 16,
        margin: 0,
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    iconButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e8e3f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SocialLinks;
