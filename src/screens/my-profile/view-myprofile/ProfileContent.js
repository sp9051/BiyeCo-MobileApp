import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import InfoSection from './InfoSection';

const ProfileContent = () => {
    const basicInfoItems = [
        { label: 'Age', value: '28 years' },
        { label: 'Height', value: '5\'10"' },
        { label: 'Religion', value: 'Muslim' },
        { label: 'Language', value: 'Bangla' },
        { label: 'Marital Status', value: 'Single' },
    ];

    const professionalItems = [
        { label: 'Profession', value: 'Software Engineer' },
        { label: 'Education', value: 'B.Tech Computer Science' },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.storySection}>
                <Text style={styles.storyTitle}>The Story I Carry</Text>
                <Text style={styles.storyText}>
                    I'm a passionate software engineer who loves creating innovative
                    solutions. In my free time, I enjoy reading, traveling, and
                    spending quality time with family and friends.
                </Text>
            </View>

            <InfoSection title="Basic Information" items={basicInfoItems} />
            <InfoSection title="Professional Details" items={professionalItems} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    storySection: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
    },
    storyTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#212121',
        marginBottom: 12,
    },
    storyText: {
        fontSize: 15,
        lineHeight: 24,
        color: '#616161',
    },
});

export default ProfileContent;
