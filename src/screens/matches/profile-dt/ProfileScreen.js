import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileAvatar from './ProfileAvatar';
import ProfileSection from './ProfileSection';
import InfoRow from './InfoRow';
import HobbyTag from './HobbyTag';
import PhotoGrid from './PhotoGrid';
import ConnectButton from './ConnectButton';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <ProfileHeader />
                <ProfileAvatar />

                <View style={styles.contentContainer}>
                    {/* My Story Section */}
                    <ProfileSection
                        icon="👤"
                        title="My Story"
                        hasMenu={true}
                    >
                        <View style={styles.storyContent}>
                            <Text style={styles.storyText}>
                                I'm a passionate software engineer who loves creating innovative solutions. I enjoy traveling, reading, and spending time with family. Looking for someone who shares similar values and interests.
                            </Text>
                        </View>
                    </ProfileSection>

                    {/* Basic Information Section */}
                    <ProfileSection
                        icon="ℹ"
                        title="Basic Information"
                    >
                        <View style={styles.infoContainer}>
                            <InfoRow label={"Height\" value=\"5'6\""} />
                            <InfoRow label="Education" value="Masters in CS" />
                            <InfoRow label="Profession" value="Software Engineer" />
                            <InfoRow label="Religion" value="Muslim" />
                            <InfoRow label="Mother Tongue" value="Bengali" />
                        </View>
                    </ProfileSection>

                    {/* Family Details Section */}
                    <ProfileSection
                        icon="🏠"
                        title="Family Details"
                        hasArrow={true}
                    >
                        <View style={styles.infoContainer}>
                            <InfoRow label="Father's Occupation" value="Business" />
                            <InfoRow label="Mother's Occupation" value="Teacher" />
                            <InfoRow label="Siblings" value="1 Sister" />
                            <InfoRow label="Hometown" value="Dhaka" />
                        </View>
                    </ProfileSection>

                    {/* Lifestyle & Interests Section */}
                    <ProfileSection
                        icon="💜"
                        title="Lifestyle & Interests"
                    >
                        <View style={styles.lifestyleContainer}>
                            <View style={styles.hobbiesSection}>
                                <Text style={styles.hobbiesLabel}>Hobbies</Text>
                                <View style={styles.hobbiesContainer}>
                                    <HobbyTag text="Reading" />
                                    <HobbyTag text="Traveling" />
                                    <HobbyTag text="Cooking" />
                                    <HobbyTag text="Yoga" />
                                </View>
                            </View>

                            <View style={styles.lifestyleGrid}>
                                <View style={styles.lifestyleRow}>
                                    <View style={styles.lifestyleItem}>
                                        <Text style={styles.lifestyleLabel}>Diet</Text>
                                        <HobbyTag text="Vegetarian" />
                                    </View>
                                    <View style={styles.lifestyleItem}>
                                        <Text style={styles.lifestyleLabel}>Smoking</Text>
                                        <Text style={styles.lifestyleValue}>No</Text>
                                    </View>
                                </View>
                                <View style={styles.lifestyleRow}>
                                    <View style={styles.lifestyleItem}>
                                        <Text style={styles.lifestyleLabel}>Drinking</Text>
                                        <Text style={styles.lifestyleValue}>No</Text>
                                    </View>
                                    <View style={styles.lifestyleItem}>
                                        <Text style={styles.lifestyleLabel}>Fitness</Text>
                                        <Text style={styles.lifestyleValue}>Regular</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ProfileSection>

                    {/* Photos Section */}
                    <PhotoGrid />

                    {/* Partner Preferences Section */}
                    <ProfileSection
                        icon="🔍"
                        title="Partner Preferences"
                    >
                        <View style={styles.infoContainer}>
                            <InfoRow label="Age" value="28-35 years" />
                            <InfoRow label={"Height\" value=\"5'8\" - 6'2\""} />
                            <InfoRow label="Education" value="Graduate or above" />
                            <InfoRow label="Profession" value="Any" />
                            <InfoRow label="Location" value="Dhaka, Sylhet, Rajshahi" />
                        </View>
                    </ProfileSection>

                    <View style={styles.bottomSpacer} />
                </View>
            </ScrollView>

            <ConnectButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6B4FA0',
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: '#F8F9FA',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: 40,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    storyContent: {
        marginTop: 12,
    },
    storyText: {
        color: '#666',
        fontSize: 14,
        lineHeight: 22,
    },
    infoContainer: {
        marginTop: 16,
    },
    lifestyleContainer: {
        marginTop: 16,
    },
    hobbiesSection: {
        marginBottom: 16,
    },
    hobbiesLabel: {
        color: '#666',
        fontSize: 14,
        marginBottom: 8,
    },
    hobbiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    lifestyleGrid: {
        gap: 12,
    },
    lifestyleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    lifestyleItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    lifestyleLabel: {
        color: '#666',
        fontSize: 14,
        width: 80,
    },
    lifestyleValue: {
        color: '#1A1A1A',
        fontSize: 14,
        fontWeight: '500',
    },
    bottomSpacer: {
        height: 100,
    },
});

export default ProfileScreen;
