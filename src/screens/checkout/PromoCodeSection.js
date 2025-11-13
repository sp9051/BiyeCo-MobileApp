import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const PromoCodeSection = ({ promoCode, onPromoCodeChange, onApplyPromo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Promo Code</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChangeText={onPromoCodeChange}
                    style={styles.textInput}
                />
                <Pressable onPress={onApplyPromo} style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
    },
    textInput: {
        flex: 1,
        paddingTop: 14,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        fontWeight: '400',
        color: '#111827',
        minWidth: 0,
    },
    applyButton: {
        paddingTop: 14,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 16,
        borderRadius: 8,
        backgroundColor: '#53377A',
        minWidth: 78,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default PromoCodeSection;
