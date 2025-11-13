import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from './BackButton';
import ToggleSwitch from './ToggleSwitch';
import RadioOption from './RadioOption';
import SafetyFeatureItem from './SafetyFeatureItem';
import UpgradeCard from './UpgradeCard';

const PrivacySafetyScreen = () => {
    const [profileVisibility, setProfileVisibility] = useState(true);
    const [photoPrivacy, setPhotoPrivacy] = useState('matches');

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleUpgradePress = () => {
        // Handle upgrade action
        console.log('Upgrade pressed');
    };

    const BlockedIcon = () => (
        <View style={styles.iconCircle}>
            <View style={styles.iconSlash} />
        </View>
    );

    const ReportIcon = () => (
        <View style={styles.iconFlag} />
    );

    const SafetyTipsIcon = () => (
        <View style={styles.iconShield} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={handleBackPress} />
                <Text style={styles.headerTitle}>Privacy & Safety</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <View style={styles.profileVisibilityContainer}>
                        <View style={styles.profileVisibilityContent}>
                            <View style={styles.profileVisibilityText}>
                                <Text style={styles.sectionTitle}>Profile Visibility</Text>
                                <Text style={styles.sectionDescription}>Control who can see your profile</Text>
                            </View>
                            <ToggleSwitch
                                value={profileVisibility}
                                onValueChange={setProfileVisibility}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Photo Privacy</Text>

                    <RadioOption
                        title="Public Access"
                        description="Visible to all verified users on Biye Co."
                        selected={photoPrivacy === 'public'}
                        onPress={() => setPhotoPrivacy('public')}
                    />

                    <RadioOption
                        title="Matches Only"
                        description="Only shown to profiles you've matched or connected with."
                        selected={photoPrivacy === 'matches'}
                        onPress={() => setPhotoPrivacy('matches')}
                    />

                    <RadioOption
                        title="Aalok (Premium) Only"
                        description="Visible to all verified users on Biye Co."
                        selected={photoPrivacy === 'premium'}
                        onPress={() => setPhotoPrivacy('premium')}
                    />

                    <RadioOption
                        title="Stealth View (Obhijaat Only)"
                        description="Available only for Obhijaat members — your photo remains hidden until you decide to reveal it."
                        selected={photoPrivacy === 'stealth'}
                        onPress={() => setPhotoPrivacy('stealth')}
                        style={styles.lastRadioOption}
                    />
                </View>

                <View style={styles.safetySection}>
                    <Text style={styles.safetySectionTitle}>Safety Features</Text>

                    <SafetyFeatureItem
                        icon={<BlockedIcon />}
                        title="Blocked Members"
                        description="Manage the profiles you've chosen to block."
                    />

                    <SafetyFeatureItem
                        icon={<ReportIcon />}
                        title="Report a Member"
                        description="Flag any behaviour that feels suspicious or inappropriate."
                    />

                    <SafetyFeatureItem
                        icon={<SafetyTipsIcon />}
                        title="Safety Tips"
                        description="Explore simple ways to stay safe and confident while connecting."
                        style={styles.lastSafetyItem}
                    />
                </View>

                <UpgradeCard onUpgradePress={handleUpgradePress} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginLeft: 16,
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        marginBottom: 16,
    },
    profileVisibilityContainer: {
        backgroundColor: '#fff',
    },
    profileVisibilityContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileVisibilityText: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    sectionDescription: {
        fontSize: 14,
        color: '#6b7280',
    },
    lastRadioOption: {
        marginBottom: 0,
    },
    safetySection: {
        marginBottom: 16,
    },
    safetySectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 12,
        marginLeft: 4,
    },
    lastSafetyItem: {
        marginBottom: 16,
    },
    iconCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#6b7280',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    iconSlash: {
        width: 20,
        height: 2,
        backgroundColor: '#6b7280',
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
    },
    iconFlag: {
        width: 5,
        height: 18,
        backgroundColor: '#6b7280',
        marginLeft: -8,
    },
    iconShield: {
        width: 20,
        height: 24,
        backgroundColor: '#6b7280',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
});

export default PrivacySafetyScreen;
