import React from 'react';
import { View, Text, PanGestureHandler, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    runOnJS,
    clamp,
} from 'react-native-reanimated';

const RangeSlider = ({
    title,
    min,
    max,
    minValue,
    maxValue,
    onMinChange,
    onMaxChange,
    formatValue,
    unit
}) => {
    const sliderWidth = 300; // Fixed width for calculations
    const thumbSize = 20;

    const minPosition = useSharedValue(((minValue - min) / (max - min)) * sliderWidth);
    const maxPosition = useSharedValue(((maxValue - min) / (max - min)) * sliderWidth);

    const minGesture = Gesture.Pan()
        .onUpdate((event) => {
            const newPosition = clamp(event.translationX + minPosition.value, 0, maxPosition.value - thumbSize);
            minPosition.value = newPosition;
            const newValue = Math.round(min + (newPosition / sliderWidth) * (max - min));
            runOnJS(onMinChange)(newValue);
        });

    const maxGesture = Gesture.Pan()
        .onUpdate((event) => {
            const newPosition = clamp(event.translationX + maxPosition.value, minPosition.value + thumbSize, sliderWidth);
            maxPosition.value = newPosition;
            const newValue = Math.round(min + (newPosition / sliderWidth) * (max - min));
            runOnJS(onMaxChange)(newValue);
        });

    const trackStyle = useAnimatedStyle(() => ({
        left: minPosition.value,
        width: maxPosition.value - minPosition.value,
    }));

    const minThumbStyle = useAnimatedStyle(() => ({
        left: minPosition.value - thumbSize / 2,
    }));

    const maxThumbStyle = useAnimatedStyle(() => ({
        left: maxPosition.value - thumbSize / 2,
    }));

    const displayValue = formatValue ? formatValue(minValue) : minValue;
    const displayMaxValue = formatValue ? formatValue(maxValue) : maxValue;
    const rangeDisplay = formatValue ? formatValue(maxValue - minValue) : (maxValue - minValue);

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
                <Animated.View style={[styles.activeTrack, trackStyle]} />
                <GestureDetector gesture={minGesture}>
                    <Animated.View style={[styles.thumb, minThumbStyle]} />
                </GestureDetector>
                <GestureDetector gesture={maxGesture}>
                    <Animated.View style={[styles.thumb, maxThumbStyle]} />
                </GestureDetector>
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
        height: 40,
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
    thumb: {
        position: 'absolute',
        width: 20,
        height: 20,
        backgroundColor: '#5b3a8f',
        borderRadius: 10,
        top: 10,
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

export default RangeSlider;
