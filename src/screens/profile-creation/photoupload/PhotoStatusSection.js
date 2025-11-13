import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CircleCheckIcon from './CircleCheckIcon';
import CircleIcon from './CircleIcon';

const PhotoStatusSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statusCard}>
                <ImageBackground
                    source={{
                        uri: "https://api.builder.io/api/v1/image/assets/TEMP/7c675429d27030a9391748b36294d56c0f378407?width=708",
                    }}
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImageStyle}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Photo Status Summary</Text>
                        <View style={styles.statusList}>
                            <View style={styles.statusItem}>
                                <View style={styles.statusLabel}>
                                    <CircleCheckIcon color="#53377A" size={16} />
                                    <Text style={styles.statusText}>Approved Photos</Text>
                                </View>
                                <Text style={styles.statusCount}>2</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <View style={styles.statusLabel}>
                                    <CircleIcon color="#A78BFA" size={16} />
                                    <Text style={styles.statusText}>Pending Review</Text>
                                </View>
                                <Text style={styles.statusCount}>1</Text>
                            </View>
                            <View style={styles.statusItem}>
                                <View style={styles.statusLabel}>
                                    <CircleIcon color="#C4B5FD" size={16} />
                                    <Text style={styles.statusText}>Rejected</Text>
                                </View>
                                <Text style={styles.statusCount}>1</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
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
    statusCard: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    backgroundImage: {
        width: '100%',
        height: 168,
    },
    backgroundImageStyle: {
        borderRadius: 16,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom: 12,
    },
    statusList: {
        gap: 8,
    },
    statusItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statusText: {
        color: '#FFF',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    statusCount: {
        color: '#FFF',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default PhotoStatusSection;
