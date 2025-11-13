import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FilterIcon } from './Icons';
import RequestCard from './RequestCard';

const RequestsSection = ({ requests, onCancelRequest }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>All Requests ({requests.length})</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.requestsList} showsVerticalScrollIndicator={false}>
                {requests.map((request) => (
                    <RequestCard
                        key={request.id}
                        request={request}
                        onCancel={onCancelRequest}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
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
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
});

export default RequestsSection;
