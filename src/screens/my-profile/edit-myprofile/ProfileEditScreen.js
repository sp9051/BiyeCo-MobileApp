import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProgressBar from './ProgressBar';
import ProfilePhotoSection from './ProfilePhotoSection';
import FormSection from './FormSection';
import FormField from './FormField';

const ProfileEditScreen = () => {
    const [profileCompletion, setProfileCompletion] = useState(75);
    const [fullName, setFullName] = useState('Imtiaz Ali');
    const [age, setAge] = useState('28');
    const [gender, setGender] = useState('Male');
    const [religion, setReligion] = useState('Muslim');
    const [motherTongue, setMotherTongue] = useState('Bengali');
    const [highestEducation, setHighestEducation] = useState('B.Tech');
    const [occupation, setOccupation] = useState('Software Engineer');
    const [story, setStory] = useState(
        "I'm a passionate software engineer who loves creating innovative solutions. In my free time, I enjoy reading, traveling, and spending quality time with"
    );

    const handleBack = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleSave = () => {
        // Handle save action
        console.log('Save pressed');
    };

    const handleUploadPhoto = () => {
        // Handle photo upload
        console.log('Upload photo pressed');
    };

    return (
        <View style={styles.container}>
            <ProfileHeader onBack={handleBack} onSave={handleSave} />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <ProgressBar completion={profileCompletion} />

                <ProfilePhotoSection onUploadPhoto={handleUploadPhoto} />

                <FormSection title="Basic Information">
                    <FormField
                        label="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                    />

                    <View style={styles.rowContainer}>
                        <View style={styles.halfWidth}>
                            <FormField
                                label="Age"
                                value={age}
                                onChangeText={setAge}
                                style={styles.noMargin}
                            />
                        </View>
                        <View style={styles.halfWidth}>
                            <FormField
                                label="Gender"
                                value={gender}
                                onChangeText={setGender}
                                style={styles.noMargin}
                            />
                        </View>
                    </View>

                    <FormField
                        label="Religion"
                        value={religion}
                        onChangeText={setReligion}
                    />

                    <FormField
                        label="Mother Tongue"
                        value={motherTongue}
                        onChangeText={setMotherTongue}
                        style={styles.noMargin}
                    />
                </FormSection>

                <FormSection title="Education & Profession">
                    <FormField
                        label="Highest Education"
                        value={highestEducation}
                        onChangeText={setHighestEducation}
                    />

                    <FormField
                        label="Occupation"
                        value={occupation}
                        onChangeText={setOccupation}
                        style={styles.noMargin}
                    />
                </FormSection>

                <FormSection title="The Story I Carry">
                    <FormField
                        label=""
                        value={story}
                        onChangeText={setStory}
                        multiline={true}
                        numberOfLines={5}
                        style={styles.noMargin}
                    />
                </FormSection>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f7',
    },
    scrollView: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 20,
    },
    halfWidth: {
        flex: 1,
    },
    noMargin: {
        marginBottom: 0,
    },
});

export default ProfileEditScreen;
