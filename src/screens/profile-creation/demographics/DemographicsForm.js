import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormHeader from './FormHeader';
import ProgressIndicator from './ProgressIndicator';
import FormField from './FormField';
import SelectField from './SelectField';
import TextInputField from './TextInputField';
import WeightInput from './WeightInput';
import ContinueButton from './ContinueButton';

const DemographicsForm = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('65');
    const [education, setEducation] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [profession, setProfession] = useState('');
    const [religion, setReligion] = useState('Muslim');
    const [district, setDistrict] = useState('');
    const [division, setDivision] = useState('');

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleHeightSelect = () => {
        // Handle height selection
        console.log('Height select pressed');
    };

    const handleEducationSelect = () => {
        // Handle education selection
        console.log('Education select pressed');
    };

    const handleProfessionSelect = () => {
        // Handle profession selection
        console.log('Profession select pressed');
    };

    const handleReligionSelect = () => {
        // Handle religion selection
        console.log('Religion select pressed');
    };

    const handleDistrictSelect = () => {
        // Handle district selection
        console.log('District select pressed');
    };

    const handleDivisionSelect = () => {
        // Handle division selection
        console.log('Division select pressed');
    };

    const handleContinue = () => {
        // Handle form submission
        console.log('Continue pressed');
    };

    return (
        <View style={styles.container}>
            <FormHeader title="Demographics" onBackPress={handleBackPress} />

            <ProgressIndicator currentStep={5} totalSteps={8} percentage={62} />

            <View style={styles.formContainer}>
                <View style={styles.rowContainer}>
                    <FormField label="Height" required style={styles.heightField}>
                        <SelectField
                            placeholder="Select height"
                            value={height}
                            onPress={handleHeightSelect}
                        />
                    </FormField>

                    <FormField label="Weight">
                        <WeightInput value={weight} onChangeText={setWeight} />
                    </FormField>
                </View>

                <FormField label="Highest Education" required>
                    <SelectField
                        placeholder="Select education level"
                        value={education}
                        onPress={handleEducationSelect}
                    />
                </FormField>

                <FormField label="Field of Study">
                    <TextInputField
                        placeholder="e.g., Computer Science, Business Administration"
                        value={fieldOfStudy}
                        onChangeText={setFieldOfStudy}
                    />
                </FormField>

                <FormField label="Profession" required>
                    <SelectField
                        placeholder="Select profession"
                        value={profession}
                        onPress={handleProfessionSelect}
                    />
                </FormField>

                <FormField label="Religion" required>
                    <SelectField
                        value={religion}
                        onPress={handleReligionSelect}
                    />
                </FormField>

                <FormField label="Ancestral Home" required>
                    <SelectField
                        placeholder="Select your District"
                        value={district}
                        onPress={handleDistrictSelect}
                        style={styles.ancestralField}
                    />
                    <SelectField
                        placeholder="Select your Division"
                        value={division}
                        onPress={handleDivisionSelect}
                        style={styles.divisionField}
                    />
                </FormField>
            </View>

            <ContinueButton onPress={handleContinue} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 386,
        paddingTop: 10,
        paddingBottom: 56,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 32,
        gap: 24,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        width: '100%',
    },
    heightField: {
        flex: 1,
    },
    ancestralField: {
        paddingVertical: 15,
        paddingHorizontal: 16,
    },
    divisionField: {
        paddingVertical: 15,
        paddingHorizontal: 16,
        marginTop: 16,
    },
});

export default DemographicsForm;
