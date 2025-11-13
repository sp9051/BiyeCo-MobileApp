import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FilterHeader from './FilterHeader';
import EducationFilter from './EducationFilter';
import ProfessionFilter from './ProfessionFilter';
import LifestyleFilter from './LifestyleFilter';
import DietFilter from './DietFilter';
import FilterActions from './FilterActions';

const AdvancedFilters = () => {
    const [selectedEducation, setSelectedEducation] = useState(['Post Graduate']);
    const [selectedProfession, setSelectedProfession] = useState('');
    const [smoking, setSmoking] = useState('Any');
    const [drinking, setDrinking] = useState('Any');
    const [selectedDiet, setSelectedDiet] = useState(['Vegetarian']);

    const toggleEducation = (value) => {
        const index = selectedEducation.indexOf(value);
        if (index > -1) {
            setSelectedEducation(selectedEducation.filter((item) => item !== value));
        } else {
            setSelectedEducation([...selectedEducation, value]);
        }
    };

    const toggleDiet = (value) => {
        const index = selectedDiet.indexOf(value);
        if (index > -1) {
            setSelectedDiet(selectedDiet.filter((item) => item !== value));
        } else {
            setSelectedDiet([...selectedDiet, value]);
        }
    };

    const resetFilters = () => {
        setSelectedEducation([]);
        setSelectedProfession('');
        setSmoking('Any');
        setDrinking('Any');
        setSelectedDiet([]);
    };

    const applyFilters = () => {
        console.log('Filters applied', {
            education: selectedEducation,
            profession: selectedProfession,
            smoking,
            drinking,
            diet: selectedDiet,
        });
    };

    const handleGoBack = () => {
        console.log('Go back');
    };

    return (
        <View style={styles.container}>
            <FilterHeader onBack={handleGoBack} onReset={resetFilters} />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <EducationFilter
                    selectedEducation={selectedEducation}
                    onToggleEducation={toggleEducation}
                />

                <ProfessionFilter
                    selectedProfession={selectedProfession}
                    onSelectProfession={setSelectedProfession}
                />

                <LifestyleFilter
                    smoking={smoking}
                    drinking={drinking}
                    onSmokingChange={setSmoking}
                    onDrinkingChange={setDrinking}
                />

                <DietFilter
                    selectedDiet={selectedDiet}
                    onToggleDiet={toggleDiet}
                />
            </ScrollView>

            <FilterActions onReset={resetFilters} onApply={applyFilters} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F7FC',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    content: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
});

export default AdvancedFilters;
