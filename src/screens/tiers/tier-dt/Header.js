import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from './BackIcon';
import CrownIcon from './CrownIcon';

const Header = ({ onBackPress }) => {
    return (
        <LinearGradient
            colors={['#7C3AED', '#A855F7']}
            style={styles.container}
        >
            <TouchableOpacity
                style={styles.backButton}
                onPress={onBackPress}
                accessibilityLabel="Go back"
            >
                <BackIcon />
            </TouchableOpacity>

            <Text style={styles.title}>Aalok</Text>

            <View style={styles.crownContainer}>
                <CrownIcon width={48} height={48} />
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    A distinguished presence - refined, confident,
                </Text>
                <Text style={styles.description}>
                    and guided by light that sets you apart
                </Text>
            </View>

            <Text style={styles.subtitle}>
                Ultimate matrimonial experience
            </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        paddingHorizontal: 24,
        paddingBottom: 40,
        alignItems: 'center',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 16,
        padding: 8,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 32,
        letterSpacing: -0.5,
    },
    crownContainer: {
        width: 96,
        height: 96,
        borderRadius: 50,
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    description: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        opacity: 0.95,
        fontWeight: '400',
        textAlign: 'center',
    },
    subtitle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
    },
});

export default Header;
