import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import FormHeader from './FormHeader';
import NameInput from './NameInput';
import GenderSelector from './GenderSelector';
import DateOfBirthInput from './DateOfBirthInput';
import LocationInput from './LocationInput';
import ContinueButton from './ContinueButton';

const BasicDetailsForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleContinue = () => {
        // Handle form submission
        const formData = {
            firstName,
            lastName,
            gender,
            dateOfBirth: { day, month, year },
            location: { city, state, country }
        };
        console.log('Form data:', formData);
    };

    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="px-6 pt-12 pb-6">
                    <FormHeader onBackPress={handleBackPress} />

                    <View className="mt-6">
                        <NameInput
                            firstName={firstName}
                            lastName={lastName}
                            onFirstNameChange={setFirstName}
                            onLastNameChange={setLastName}
                        />

                        <GenderSelector
                            selectedGender={gender}
                            onGenderChange={setGender}
                        />

                        <DateOfBirthInput
                            day={day}
                            month={month}
                            year={year}
                            onDayChange={setDay}
                            onMonthChange={setMonth}
                            onYearChange={setYear}
                        />

                        <LocationInput
                            city={city}
                            state={state}
                            country={country}
                            onCityChange={setCity}
                            onStateChange={setState}
                            onCountryChange={setCountry}
                        />

                        <ContinueButton onPress={handleContinue} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default BasicDetailsForm;
