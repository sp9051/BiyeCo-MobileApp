import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HobbiesSection = ({ hobbies, hobbyInput, setHobbyInput, addHobby, removeHobby }) => {
    const handleSubmitEditing = () => {
        addHobby();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Hobbies & Interests</Text>
            <View style={styles.hobbiesContainer}>
                {hobbies?.map((hobby) => (
                    <View key={hobby} style={styles.hobbyTag}>
                        <Text style={styles.hobbyText}>{hobby}</Text>
                        <TouchableOpacity
                            onPress={() => removeHobby(hobby)}
                            style={styles.removeButton}
                        >
                            <Svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                                <Path
                                    d="M9.36807 4.11807C9.70986 3.77627 9.70986 3.22119 9.36807 2.87939C9.02627 2.5376 8.47119 2.5376 8.1294 2.87939L5.2501 5.76143L2.36807 2.88213C2.02627 2.54033 1.47119 2.54033 1.12939 2.88213C0.787598 3.22393 0.787598 3.779 1.12939 4.1208L4.01143 7.0001L1.13213 9.88213C0.790332 10.2239 0.790332 10.779 1.13213 11.1208C1.47393 11.4626 2.029 11.4626 2.3708 11.1208L5.2501 8.23877L8.13213 11.1181C8.47393 11.4599 9.02901 11.4599 9.3708 11.1181C9.7126 10.7763 9.7126 10.2212 9.3708 9.8794L6.48877 7.0001L9.36807 4.11807Z"
                                    fill="#6B7280"
                                />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <TextInput
                placeholder="Type hobby and press enter"
                value={hobbyInput}
                onChangeText={setHobbyInput}
                onSubmitEditing={handleSubmitEditing}
                style={styles.textInput}
                returnKeyType="done"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        color: '#000',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    hobbiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    hobbyTag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#F3F4F6',
    },
    hobbyText: {
        color: '#000',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    removeButton: {
        padding: 2,
    },
    textInput: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: '400',
    },
});

export default HobbiesSection;
