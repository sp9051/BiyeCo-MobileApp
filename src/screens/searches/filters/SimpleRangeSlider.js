import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleRangeSlider = ({
    title,
    min,
    max,
    minValue,
    maxValue,
    formatValue,
    unit
}) => {
    const displayValue = formatValue ? formatValue(minValue) : minValue;
    const displayMaxValue = formatValue ? formatValue(maxValue) : maxValue;
    const rangeDisplay = formatValue ? formatValue(maxValue - minValue) : (maxValue - minValue);

    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>
                    {title.includes('Age') ? 'Age: ' : 'Height: '}
                    {displayValue} - {displayMaxValue}
                    {unit && ` ${unit}`}
                </Text>
                <Text style={styles.rangeText}>
                    {rangeDisplay} {unit || 'range'}
                </Text>
            </View>
            <View style={styles.sliderContainer}>
                <View style={styles.track} />
                <View
                    style={[
                        styles.activeTrack,
                        {
                            left: `${minPercent}%`,
                            width: `${maxPercent - minPercent}%`,
                        }
                    ]}
                />
            </View>
            <View style={styles.labelsContainer}>
                <Text style={styles.label}>{formatValue ? formatValue(min) : min}</Text>
                <Text style={styles.label}>{formatValue ? formatValue(max) : max}</Text>
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
        color: '#1f2937',
        marginBottom: 16,
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    valueText: {
        fontSize: 14,
        color: '#4b5563',
    },
    rangeText: {
        fontSize: 14,
        color: '#9ca3af',
    },
    sliderContainer: {
        height: 20,
        justifyContent: 'center',
        marginBottom: 8,
        position: 'relative',
    },
    track: {
        height: 6,
        backgroundColor: '#e5e7eb',
        borderRadius: 3,
    },
    activeTrack: {
        position: 'absolute',
        height: 6,
        backgroundColor: '#5b3a8f',
        borderRadius: 3,
    },
    labelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 14,
        color: '#6b7280',
    },
});

export default SimpleRangeSlider;
