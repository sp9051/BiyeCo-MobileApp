import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BackIcon from './BackIcon';
import ProfileProgressCard from './ProfileProgressCard';
import ProfileSectionItem from './ProfileSectionItem';
import DailyMatchesCard from './DailyMatchesCard';
import PrivacySafetyCard from './PrivacySafetyCard';
import RocketIcon from './RocketIcon';

const ProfileReviewScreen = () => {
    const [dailyMatchesEnabled, setDailyMatchesEnabled] = useState(true);

    const toggleDailyMatches = () => {
        setDailyMatchesEnabled(!dailyMatchesEnabled);
    };

    const profileSections = [
        { title: "Basic Details", isCompleted: true, buttonText: "Edit" },
        { title: "About Me", isCompleted: true, buttonText: "Edit" },
        { title: "Demographics", isCompleted: true, buttonText: "Edit" },
        { title: "Family Details", isCompleted: true, buttonText: "Edit" },
        { title: "Lifestyle", isCompleted: true, buttonText: "Edit" },
        { title: "Photos", isCompleted: false, buttonText: "Add" },
        { title: "Partner Preferences", isCompleted: true, buttonText: "Edit" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} aria-label="Go back">
                    <BackIcon size={14} color="#4B5563" />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitle}>Review & Publish</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <ProfileProgressCard />

                    <View style={styles.sectionsContainer}>
                        {profileSections.map((section, index) => (
                            <ProfileSectionItem
                                key={index}
                                title={section.title}
                                isCompleted={section.isCompleted}
                                buttonText={section.buttonText}
                                onPress={() => console.log(`Edit ${section.title}`)}
                            />
                        ))}
                    </View>

                    <DailyMatchesCard
                        isEnabled={dailyMatchesEnabled}
                        onToggle={toggleDailyMatches}
                    />

                    <PrivacySafetyCard />

                    <TouchableOpacity style={styles.publishButton}>
                        <RocketIcon size={18} color="white" />
                        <Text style={styles.publishButtonText}>Publish My Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        borderRadius: 20,
        maxWidth: 386,
        alignSelf: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
        position: 'relative',
    },
    backButton: {
        width: 40,
        height: 40,
        paddingTop: 11,
        paddingRight: 13,
        paddingBottom: 11,
        paddingLeft: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        backgroundColor: '#F3F4F6',
    },
    titleContainer: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
    },
    headerTitle: {
        color: '#111827',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    scrollContainer: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 18,
        gap: 16,
    },
    sectionsContainer: {
        gap: 12,
        width: '100%',
    },
    publishButton: {
        flexDirection: 'row',
        width: '100%',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderRadius: 16,
        backgroundColor: '#53377A',
        marginTop: 16,
        marginBottom: 20,
    },
    publishButtonText: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700',
        fontFamily: 'Inter',
    },
});

export default ProfileReviewScreen;
