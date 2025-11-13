import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ProgressHeader from './ProgressHeader';
import HobbiesSection from './HobbiesSection';
import PreferenceSection from './PreferenceSection';
import DropdownSection from './DropdownSection';

const LifestyleForm = () => {
    const [hobbies, setHobbies] = useState(['Reading', 'Traveling', 'Music']);
    const [hobbyInput, setHobbyInput] = useState('');
    const [dietPreference, setDietPreference] = useState('Vegetarian');
    const [smokingHabit, setSmokingHabit] = useState('Never');
    const [drinkingHabit, setDrinkingHabit] = useState('Never');
    const [petPreference, setPetPreference] = useState('Love Pets');
    const [exerciseRoutine, setExerciseRoutine] = useState('');
    const [livingSituation, setLivingSituation] = useState('');

    const dietOptions = ['Vegetarian', 'Non-Vegetarian', 'Vegan'];
    const smokingOptions = ['Never', 'Occasionally', 'Regularly'];
    const drinkingOptions = ['Never', 'Socially', 'Regularly'];
    const petOptions = ['Love Pets', "Don't Mind", "Don't Like"];

    const exerciseOptions = [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Rarely', value: 'rarely' },
    ];

    const livingOptions = [
        { label: 'Living Alone', value: 'alone' },
        { label: 'With Roommates', value: 'roommates' },
        { label: 'With Family', value: 'family' },
    ];

    const removeHobby = (hobby) => {
        setHobbies(hobbies.filter((h) => h !== hobby));
    };

    const addHobby = () => {
        if (hobbyInput.trim() && !hobbies.includes(hobbyInput.trim())) {
            setHobbies([...hobbies, hobbyInput.trim()]);
            setHobbyInput('');
        }
    };

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleContinue = () => {
        // Handle form submission
        console.log('Continue pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <ProgressHeader onBackPress={handleBackPress} />

                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.contentContainer}>
                        <HobbiesSection
                            hobbies={hobbies}
                            hobbyInput={hobbyInput}
                            setHobbyInput={setHobbyInput}
                            addHobby={addHobby}
                            removeHobby={removeHobby}
                        />

                        <PreferenceSection
                            title="Diet Preference"
                            options={dietOptions}
                            selectedValue={dietPreference}
                            onSelect={setDietPreference}
                        />

                        <PreferenceSection
                            title="Smoking Habit"
                            options={smokingOptions}
                            selectedValue={smokingHabit}
                            onSelect={setSmokingHabit}
                        />

                        <PreferenceSection
                            title="Drinking Habit"
                            options={drinkingOptions}
                            selectedValue={drinkingHabit}
                            onSelect={setDrinkingHabit}
                        />

                        <DropdownSection
                            title="Exercise Routine"
                            value={exerciseRoutine}
                            onValueChange={setExerciseRoutine}
                            options={exerciseOptions}
                            placeholder="Select exercise routine"
                        />

                        <PreferenceSection
                            title="Pet Preference"
                            options={petOptions}
                            selectedValue={petPreference}
                            onSelect={setPetPreference}
                        />

                        <View style={styles.lastSection}>
                            <DropdownSection
                                title="Living Situation"
                                value={livingSituation}
                                onValueChange={setLivingSituation}
                                options={livingOptions}
                                placeholder="Select living situation"
                            />
                        </View>

                        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                            <Text style={styles.continueText}>Continue</Text>
                            <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <Path
                                    d="M15.4195 9.79473C15.859 9.35527 15.859 8.6416 15.4195 8.20215L9.79453 2.57715C9.35508 2.1377 8.64141 2.1377 8.20195 2.57715C7.7625 3.0166 7.7625 3.73027 8.20195 4.16973L11.9109 7.8752H1.125C0.502734 7.8752 0 8.37793 0 9.0002C0 9.62246 0.502734 10.1252 1.125 10.1252H11.9074L8.20547 13.8307C7.76602 14.2701 7.76602 14.9838 8.20547 15.4232C8.64492 15.8627 9.35859 15.8627 9.79805 15.4232L15.423 9.79824L15.4195 9.79473Z"
                                    fill="white"
                                />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 386,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 35,
        paddingLeft: 0,
        alignItems: 'center',
        borderRadius: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 386,
        position: 'relative',
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
    },
    lastSection: {
        marginBottom: 40,
    },
    continueButton: {
        width: '100%',
        padding: 18,
        borderRadius: 16,
        backgroundColor: '#53377A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    continueText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default LifestyleForm;
