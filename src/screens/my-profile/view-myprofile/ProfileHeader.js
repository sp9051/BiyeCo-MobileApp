import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeftIcon, MoreVerticalIcon } from './IconComponents';

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
                <ChevronLeftIcon size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>My Profile</Text>
            <TouchableOpacity style={styles.iconButton}>
                <MoreVerticalIcon size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7C4DFF',
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        margin: 0,
    },
});

export default ProfileHeader;
