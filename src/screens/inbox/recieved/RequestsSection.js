import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FilterIcon } from './Icons';
import RequestCard from './RequestCard';

const RequestsSection = ({ requests, onAccept, onDecline }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>All Requests (3)</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.requestsList}>
                {requests.map((request) => (
                    <RequestCard
                        key={request.id}
                        request={request}
                        onAccept={onAccept}
                        onDecline={onDecline}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6c757d',
    },
    filterButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    requestsList: {
        paddingHorizontal: 16,
    },
});

export default RequestsSection;
