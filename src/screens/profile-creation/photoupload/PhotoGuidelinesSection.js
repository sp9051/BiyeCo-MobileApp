import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckIcon from './CheckIcon';
import XIcon from './XIcon';

const PhotoGuidelinesSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.guidelinesBox}>
                <Text style={styles.title}>Photo Guidelines</Text>
                <View style={styles.guidelinesList}>
                    <View style={styles.guidelineItem}>
                        <CheckIcon style={styles.icon} />
                        <Text style={styles.guidelineText}>
                            Choose clear, recent photos where you are easy to recognise
                        </Text>
                    </View>
                    <View style={styles.guidelineItem}>
                        <CheckIcon style={styles.icon} />
                        <Text style={styles.guidelineText}>
                            Good lighting and quality make a strong first impression
                        </Text>
                    </View>
                    <View style={styles.guidelineItem}>
                        <XIcon style={styles.icon} />
                        <Text style={styles.guidelineText}>
                            No group photos or anything that hides your face (like sunglases)
                        </Text>
                    </View>
                    <View style={styles.guidelineItem}>
                        <XIcon style={styles.icon} />
                        <Text style={styles.guidelineText}>Photos of children</Text>
                    </View>
                    <View style={styles.guidelineItem}>
                        <XIcon style={styles.icon} />
                        <Text style={styles.guidelineText}>
                            Anything inappropriate or offensive images
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 24,
        paddingLeft: 16,
    },
    guidelinesBox: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#BFDBFE',
        paddingTop: 17,
        paddingRight: 24,
        paddingBottom: 17,
        paddingLeft: 24,
        backgroundColor: '#E9DFF6',
    },
    title: {
        color: '#53377A',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom: 12,
    },
    guidelinesList: {
        gap: 6,
    },
    guidelineItem: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-start',
    },
    icon: {
        marginTop: 3,
        flexShrink: 0,
    },
    guidelineText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
        flex: 1,
    },
});

export default PhotoGuidelinesSection;
