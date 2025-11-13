import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from './BackButton';
import ProgressBar from './ProgressBar';
import AgeRangeSlider from './AgeRangeSlider';
import FormField from './FormField';
import HeightRangeInput from './HeightRangeInput';
import DropdownField from './DropdownField';
import InputField from './InputField';
import SelectionGroup from './SelectionGroup';

const PartnerPreferences = () => {
    const [ageMin, setAgeMin] = useState(18);
    const [ageMax, setAgeMax] = useState(40);
    const [heightMin, setHeightMin] = useState("5'0\"");
    const [heightMax, setHeightMax] = useState("6'0\"");
    const [locationPreference, setLocationPreference] = useState(
        "Near me / Same City / Same Country / Beyond Borders"
    );
    const [other, setOther] = useState(
        "Near me / Same City / Same Country / Beyond Borders"
    );
    const [education, setEducation] = useState("Any");
    const [profession, setProfession] = useState("Any");
    const [religion, setReligion] = useState("Same as mine");
    const [maritalStatus, setMaritalStatus] = useState("Never Married");
    const [children, setChildren] = useState("0");
    const [childrenStatus, setChildrenStatus] = useState("Living with me");
    const [dietPreference, setDietPreference] = useState("Vegetarian");
    const [smokingHabit, setSmokingHabit] = useState("Never");
    const [drinkingHabit, setDrinkingHabit] = useState("Never");

    const handleAgeSliderChange = (type, value) => {
        if (type === "min") {
            setAgeMin(value);
        } else {
            setAgeMax(value);
        }
    };

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <BackButton onPress={handleBackPress} />
                <Text style={styles.headerTitle}>Partner Preferences</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Progress Bar */}
                <ProgressBar currentStep={8} totalSteps={8} percentage={100} />

                {/* Age Range */}
                <AgeRangeSlider
                    ageMin={ageMin}
                    ageMax={ageMax}
                    onAgeChange={handleAgeSliderChange}
                />

                {/* Height Range */}
                <FormField label="Height Range">
                    <HeightRangeInput heightMin={heightMin} heightMax={heightMax} />
                </FormField>

                {/* Location Preference */}
                <FormField label="Location Preference">
                    <DropdownField value={locationPreference} />
                </FormField>

                {/* Other */}
                <FormField label="Other:">
                    <DropdownField value={other} />
                </FormField>

                {/* Education */}
                <FormField label="Education">
                    <InputField value={education} />
                </FormField>

                {/* Profession */}
                <FormField label="Profession">
                    <InputField value={profession} />
                </FormField>

                {/* Religion */}
                <FormField label="Religion">
                    <InputField value={religion} />
                </FormField>

                {/* Marital Status */}
                <FormField label="Marital Status" required>
                    <SelectionGroup
                        options={["Never Married", "Divorced", "Widowed"]}
                        selectedValue={maritalStatus}
                        onSelect={setMaritalStatus}
                    />
                </FormField>

                {/* Children */}
                <FormField label="Children" required>
                    <InputField value={children} />
                </FormField>

                {/* Children Status */}
                <FormField label="Children status" required>
                    <InputField value={childrenStatus} />
                </FormField>

                {/* Diet Preference */}
                <FormField label="Diet Preference">
                    <SelectionGroup
                        options={["Vegetarian", "Non-Vegetarian", "Vegan"]}
                        selectedValue={dietPreference}
                        onSelect={setDietPreference}
                    />
                </FormField>

                {/* Smoking Habit */}
                <FormField label="Smoking Habit">
                    <SelectionGroup
                        options={["Never", "Occasionally", "Regularly"]}
                        selectedValue={smokingHabit}
                        onSelect={setSmokingHabit}
                    />
                </FormField>

                {/* Drinking Habit */}
                <FormField label="Drinking Habit">
                    <SelectionGroup
                        options={["Never", "Socially", "Regularly"]}
                        selectedValue={drinkingHabit}
                        onSelect={setDrinkingHabit}
                    />
                </FormField>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        maxWidth: 386,
        borderRadius: 20,
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 40,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 28,
    },
    content: {
        flex: 1,
        padding: 16,
    },
});

export default PartnerPreferences;
