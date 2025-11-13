import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';

const ProfessionFilter = ({ selectedProfession, onSelectProfession }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const professionOptions = [
        { value: '', label: 'Select Profession' },
        { value: 'engineer', label: 'Engineer' },
        { value: 'doctor', label: 'Doctor' },
        { value: 'teacher', label: 'Teacher' },
        { value: 'business', label: 'Business' },
    ];

    const selectedOption = professionOptions.find(option => option.value === selectedProfession);
    const displayText = selectedOption ? selectedOption.label : 'Select Profession';

    const handleSelectOption = (value) => {
        onSelectProfession(value);
        setIsDropdownOpen(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profession</Text>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsDropdownOpen(true)}
            >
                <Text style={styles.dropdownText}>{displayText}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>

            <Modal
                visible={isDropdownOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsDropdownOpen(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setIsDropdownOpen(false)}
                >
                    <View style={styles.modalContent}>
                        <FlatList
                            data={professionOptions}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.optionItem}
                                    onPress={() => handleSelectOption(item.value)}
                                >
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D2640',
        marginBottom: 16,
    },
    dropdown: {
        width: '100%',
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        backgroundColor: '#F8F7FC',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdownText: {
        fontSize: 16,
        color: '#9E9CAF',
    },
    dropdownArrow: {
        fontSize: 12,
        color: '#9E9CAF',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        width: '80%',
        maxHeight: '50%',
    },
    optionItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0EFF5',
    },
    optionText: {
        fontSize: 16,
        color: '#2D2640',
    },
});

export default ProfessionFilter;
