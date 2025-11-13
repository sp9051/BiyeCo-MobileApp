import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import FormHeader from './FormHeader';
import ProgressBar from './ProgressBar';
import LookingForSection from './LookingForSection';
import RelationshipSection from './RelationshipSection';
import ContinueButton from './ContinueButton';
import { useNavigation } from '@react-navigation/native';

const InputDesign = () => {
    const navigation = useNavigation()
    const [lookingFor, setLookingFor] = useState('Bride');
    const [relationship, setRelationship] = useState('Myself');
    const [customRelationship, setCustomRelationship] = useState('');

    const relationshipOptions = [
        'Myself',
        'Son',
        'Daughter',
        'Brother',
        'Sister',
        'Someone else'
    ];

    const handleBackPress = () => {
        // Handle back navigation
        navigation.goBack()
        console.log('Back pressed');
    };

    const handleContinue = () => {
        // Handle form submission
        navigation.navigate('BasicDetailsForm');
        console.log('Continue pressed', {
            lookingFor,
            relationship,
            customRelationship
        });
    };

    return (
        <View className="flex-1 bg-white px-6">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ padding: 0 }}
                showsVerticalScrollIndicator={false}
            // style={{ width: '80%' }}
            >
                <FormHeader
                    title="Let's Get Started"
                    onBackPress={handleBackPress}
                />

                <ProgressBar
                    currentStep={1}
                    totalSteps={8}
                    percentage={12}
                />

                <LookingForSection
                    lookingFor={lookingFor}
                    setLookingFor={setLookingFor}
                />

                <RelationshipSection
                    relationship={relationship}
                    setRelationship={setRelationship}
                    customRelationship={customRelationship}
                    setCustomRelationship={setCustomRelationship}
                    relationshipOptions={relationshipOptions}
                />

                <ContinueButton
                    onPress={handleContinue}
                />
            </ScrollView>
        </View>
    );
};

export default InputDesign;
