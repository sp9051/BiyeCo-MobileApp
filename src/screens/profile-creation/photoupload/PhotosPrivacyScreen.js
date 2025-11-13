import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderSection from './HeaderSection';
import ProfilePhotosSection from './ProfilePhotosSection';
import PhotoGuidelinesSection from './PhotoGuidelinesSection';
import PrivacyOptionsSection from './PrivacyOptionsSection';
import PhotoStatusSection from './PhotoStatusSection';
import ContinueButton from './ContinueButton';

const PhotosPrivacyScreen = () => {
    const [selectedPrivacyOption, setSelectedPrivacyOption] = useState('public');

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handlePrivacyOptionSelect = (option) => {
        setSelectedPrivacyOption(option);
    };

    const handleContinue = () => {
        // Handle continue action
        console.log('Continue pressed with privacy option:', selectedPrivacyOption);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <HeaderSection onBackPress={handleBackPress} />
                    <ProfilePhotosSection />
                    <PhotoGuidelinesSection />
                    <PrivacyOptionsSection
                        selectedOption={selectedPrivacyOption}
                        onOptionSelect={handlePrivacyOptionSelect}
                    />
                    <PhotoStatusSection />
                    <ContinueButton onPress={handleContinue} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        width: '100%',
        maxWidth: 386,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 30,
        borderRadius: 20,
    },
});

export default PhotosPrivacyScreen;
