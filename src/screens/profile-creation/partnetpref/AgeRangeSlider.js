import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AgeRangeSlider = ({ ageMin, ageMax, onAgeChange }) => {
    const minAge = 18;
    const maxAge = 70;
    const range = maxAge - minAge;

    const leftPosition = ((ageMin - minAge) / range) * 100;
    const width = ((ageMax - ageMin) / range) * 100;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Age Range</Text>
            <View style={styles.sliderContainer}>
                <View style={styles.ageInfo}>
                    <Text style={styles.ageText}>
                        Age: {ageMin} - {ageMax} years
                    </Text>
                    <Text style={styles.rangeText}>
                        {ageMax - ageMin} years range
                    </Text>
                </View>
                <View style={styles.sliderTrack}>
                    <View style={styles.trackBackground}>
                        <View
                            style={[
                                styles.activeTrack,
                                {
                                    left: `${leftPosition}%`,
                                    width: `${width}%`,
                                }
                            ]}
                        >
                            <View style={styles.leftHandle} />
                            <View style={styles.rightHandle} />
                        </View>
                    </View>
                </View>
                <View style={styles.ageLabels}>
                    <Text style={styles.ageLabelText}>{minAge}</Text>
                    <Text style={styles.ageLabelText}>{maxAge}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 8,
        lineHeight: 20,
    },
    sliderContainer: {
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
        borderRadius: 16,
        backgroundColor: '#F6F5F8',
    },
    ageInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    ageText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
    },
    rangeText: {
        fontSize: 14,
        color: '#6B7280',
    },
    sliderTrack: {
        position: 'relative',
        marginBottom: 8,
    },
    trackBackground: {
        width: '100%',
        height: 8,
        borderRadius: 9999,
        position: 'relative',
        backgroundColor: '#E5E7EB',
    },
    activeTrack: {
        height: 8,
        borderRadius: 9999,
        position: 'absolute',
        backgroundColor: '#53377A',
    },
    leftHandle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        position: 'absolute',
        left: -12,
        top: -8,
        backgroundColor: '#53377A',
    },
    rightHandle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        position: 'absolute',
        right: -12,
        top: -8,
        backgroundColor: '#53377A',
    },
    ageLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ageLabelText: {
        fontSize: 12,
        color: '#6B7280',
    },
});

export default AgeRangeSlider;
