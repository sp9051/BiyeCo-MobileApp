import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';

const DropdownSelect = ({ label, value, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === value);
    const displayText = selectedOption ? selectedOption.label : options[0].label;

    const handleSelect = (optionValue) => {
        onSelect(optionValue);
        setIsOpen(false);
    };

    return (
        <View>
            <Text style={styles.dropdownLabel}>{label}</Text>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsOpen(true)}
            >
                <Text style={styles.dropdownText}>{displayText}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>

            <Modal
                visible={isOpen}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setIsOpen(false)}
                >
                    <View style={styles.modalContent}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.optionItem}
                                    onPress={() => handleSelect(item.value)}
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

const LifestyleFilter = ({ smoking, drinking, onSmokingChange, onDrinkingChange }) => {
    const lifestyleOptions = [
        { value: 'Any', label: 'Any' },
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lifestyle</Text>
            <View style={styles.dropdownsContainer}>
                <View style={styles.dropdownWrapper}>
                    <DropdownSelect
                        label="Smoking"
                        value={smoking}
                        options={lifestyleOptions}
                        onSelect={onSmokingChange}
                    />
                </View>
                <View style={styles.dropdownWrapper}>
                    <DropdownSelect
                        label="Drinking"
                        value={drinking}
                        options={lifestyleOptions}
                        onSelect={onDrinkingChange}
                    />
                </View>
            </View>
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
    dropdownsContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    dropdownWrapper: {
        flex: 1,
    },
    dropdownLabel: {
        fontSize: 14,
        color: '#73748C',
        marginBottom: 8,
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
        width: '60%',
        maxHeight: '40%',
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

export default LifestyleFilter;
