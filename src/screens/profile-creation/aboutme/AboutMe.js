import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './Header';
import { ProgressIndicator } from './ProgressIndicator';
import { ProfileHeadlineInput } from './ProfileHeadlineInput';
import { StoryInput } from './StoryInput';
import { LanguageSelector } from './LanguageSelector';
import { ContinueButton } from './ContinueButton';

function AboutMe() {
    const [profileHeadline, setProfileHeadline] = useState('');
    const [story, setStory] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([
        'English',
        'Bangla',
        'French',
    ]);
    const [availableLanguages, setAvailableLanguages] = useState([
        'Spanish',
        'German',
        'Arabic',
        'Hindi',
        'Mandarin',
        '+ More',
    ]);

    function toggleLanguage(language) {
        const index = selectedLanguages.indexOf(language);
        if (index > -1) {
            setSelectedLanguages(
                selectedLanguages.filter((lang) => lang !== language)
            );
            setAvailableLanguages([...availableLanguages, language]);
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
            setAvailableLanguages(
                availableLanguages.filter((lang) => lang !== language)
            );
        }
    }

    function handleContinue() {
        console.log('Continue clicked', {
            profileHeadline: profileHeadline,
            story: story,
            languages: selectedLanguages,
        });
    }

    function handleBackPress() {
        console.log('Back button pressed');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header onBackPress={handleBackPress} />
                <ProgressIndicator />
                <View style={styles.formContainer}>
                    <ProfileHeadlineInput
                        value={profileHeadline}
                        onChangeText={setProfileHeadline}
                    />
                    <StoryInput
                        value={story}
                        onChangeText={setStory}
                    />
                    <LanguageSelector
                        selectedLanguages={selectedLanguages}
                        availableLanguages={availableLanguages}
                        onToggleLanguage={toggleLanguage}
                    />
                    <ContinueButton onPress={handleContinue} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        maxWidth: 386,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 24,
        paddingLeft: 0,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
    },
    content: {
        width: '100%',
        maxWidth: 386,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    },
    formContainer: {
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 0,
        paddingLeft: 16,
    },
});

export default AboutMe;
