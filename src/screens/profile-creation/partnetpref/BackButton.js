import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <Path
                    d="M0.293945 7.29365C-0.0966797 7.68428 -0.0966797 8.31865 0.293945 8.70928L5.29395 13.7093C5.68457 14.0999 6.31895 14.0999 6.70957 13.7093C7.1002 13.3187 7.1002 12.6843 6.70957 12.2937L3.4127 8.9999H13.0002C13.5533 8.9999 14.0002 8.55303 14.0002 7.9999C14.0002 7.44678 13.5533 6.9999 13.0002 6.9999H3.41582L6.70645 3.70615C7.09707 3.31553 7.09707 2.68115 6.70645 2.29053C6.31582 1.8999 5.68145 1.8999 5.29082 2.29053L0.29082 7.29053L0.293945 7.29365Z"
                    fill="#4B5563"
                />
            </Svg>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        backgroundColor: '#F3F4F6',
    },
});

export default BackButton;
