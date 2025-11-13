import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const ChatHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M15 18L9 12L15 6"
                        stroke="#6b4ba1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </TouchableOpacity>

            <View style={styles.userInfo}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <Path
                                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                                fill="#ffffff"
                            />
                        </Svg>
                    </View>
                    <View style={styles.onlineIndicator} />
                </View>

                <View style={styles.userDetails}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.userName}>TBC_86xxxxxx31</Text>
                        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <Path
                                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                                fill="#7c5ba6"
                            />
                        </Svg>
                    </View>
                    <Text style={styles.onlineStatus}>Online now</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.menuButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Circle cx="12" cy="5" r="2" fill="#9e9e9e" />
                    <Circle cx="12" cy="12" r="2" fill="#9e9e9e" />
                    <Circle cx="12" cy="19" r="2" fill="#9e9e9e" />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    backButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#7c5ba6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#4caf50',
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    userDetails: {
        flex: 1,
        marginLeft: 12,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1a1a1a',
    },
    onlineStatus: {
        fontSize: 13,
        color: '#7c5ba6',
    },
    menuButton: {
        padding: 8,
    },
});

export default ChatHeader;
