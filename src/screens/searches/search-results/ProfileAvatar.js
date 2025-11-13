import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProfileAvatar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head} />
            <View style={styles.body} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    head: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#d0d0d0',
    },
    body: {
        width: 160,
        height: 80,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginTop: 8,
        backgroundColor: '#d0d0d0',
    },
});

export default ProfileAvatar;
