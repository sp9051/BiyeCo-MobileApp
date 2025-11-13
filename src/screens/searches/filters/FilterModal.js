import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FilterHeader from './FilterHeader';
import TabNavigation from './TabNavigation';
import SimpleRangeSlider from './SimpleRangeSlider';
import MaritalStatusFilter from './MaritalStatusFilter';
import TextInputField from './TextInputField';
import LocationInputField from './LocationInputField';
import ApplyButton from './ApplyButton';

const FilterModal = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [ageMin, setAgeMin] = useState(18);
    const [ageMax, setAgeMax] = useState(40);
    const [heightMin, setHeightMin] = useState(57);
    const [heightMax, setHeightMax] = useState(67);
    const [maritalStatus, setMaritalStatus] = useState({
        neverMarried: true,
        divorced: false,
        widowed: false,
    });
    const [religion, setReligion] = useState('Islam');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const formatHeight = (inches) => {
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}"`;
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleMaritalStatusToggle = (status) => {
        setMaritalStatus(prev => ({
            ...prev,
            [status]: !prev[status],
        }));
    };

    const handleReset = () => {
        setAgeMin(18);
        setAgeMax(40);
        setHeightMin(57);
        setHeightMax(67);
        setMaritalStatus({
            neverMarried: false,
            divorced: false,
            widowed: false,
        });
        setReligion('');
        setCity('');
        setCountry('');
    };

    const handleApplyFilters = () => {
        console.log('Filters applied:', {
            age: { min: ageMin, max: ageMax },
            height: { min: heightMin, max: heightMax },
            maritalStatus,
            religion,
            city,
            country,
        });
    };

    const handleClose = () => {
        console.log('Close filter modal');
    };

    return (
        <View style={styles.container}>
            <FilterHeader onClose={handleClose} onReset={handleReset} />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

                <SimpleRangeSlider
                    title="Age Range"
                    min={18}
                    max={70}
                    minValue={ageMin}
                    maxValue={ageMax}
                    unit="years"
                />

                <SimpleRangeSlider
                    title="Height Range"
                    min={53}
                    max={84}
                    minValue={heightMin}
                    maxValue={heightMax}
                    formatValue={formatHeight}
                />

                <MaritalStatusFilter
                    maritalStatus={maritalStatus}
                    onToggle={handleMaritalStatusToggle}
                />

                <TextInputField
                    title="Religion"
                    value={religion}
                    onChangeText={setReligion}
                />

                <LocationInputField
                    title="City"
                    value={city}
                    onChangeText={setCity}
                    placeholder="Enter city name"
                />

                <LocationInputField
                    title="Country"
                    value={country}
                    onChangeText={setCountry}
                    placeholder="Enter country name"
                />
            </ScrollView>

            <View style={styles.footer}>
                <ApplyButton onPress={handleApplyFilters} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        maxWidth: 384,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
});

export default FilterModal;
