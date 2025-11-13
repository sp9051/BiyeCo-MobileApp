import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ReportHeader from './ReportHeader';
import ReportReasonSelector from './ReportReasonSelector';
import AdditionalDetailsInput from './AdditionalDetailsInput';
import ScreenshotUpload from './ScreenshotUpload';

const ReportProfile = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');

    const handleBack = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Submit pressed', {
            reason: selectedReason,
            details: additionalDetails,
        });
    };

    const handleReasonChange = (reason) => {
        setSelectedReason(reason);
    };

    const handleDetailsChange = (text) => {
        setAdditionalDetails(text);
    };

    const handleUpload = () => {
        // Handle file upload
        console.log('Upload pressed');
    };

    return (
        <View style={styles.container}>
            <ReportHeader onBack={handleBack} onSubmit={handleSubmit} />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <ReportReasonSelector
                    selectedReason={selectedReason}
                    onReasonChange={handleReasonChange}
                />
                <AdditionalDetailsInput
                    value={additionalDetails}
                    onChangeText={handleDetailsChange}
                />
                <ScreenshotUpload onUpload={handleUpload} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 386,
        backgroundColor: '#F9FAFB',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 24,
        paddingHorizontal: 24,
        gap: 24,
        alignItems: 'center',
    },
});

export default ReportProfile;
