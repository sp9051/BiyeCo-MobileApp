import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import CheckoutHeader from './CheckoutHeader';
import OrderSummary from './OrderSummary';
import PromoCodeSection from './PromoCodeSection';
import PaymentMethodSection from './PaymentMethodSection';

const CheckoutScreen = () => {
    const [promoCode, setPromoCode] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('bkash');

    const handleBackPress = () => {
        console.log('Back button pressed');
    };

    const handlePromoCodeChange = (value) => {
        setPromoCode(value);
    };

    const handleApplyPromo = () => {
        console.log('Applying promo code:', promoCode);
    };

    const handleSelectPayment = (method) => {
        setSelectedPayment(method);
    };

    const handlePayment = () => {
        console.log('Processing payment with:', selectedPayment);
    };

    return (
        <View style={styles.container}>
            <CheckoutHeader onBackPress={handleBackPress} />

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <OrderSummary />

                    <PromoCodeSection
                        promoCode={promoCode}
                        onPromoCodeChange={handlePromoCodeChange}
                        onApplyPromo={handleApplyPromo}
                    />

                    <PaymentMethodSection
                        selectedPayment={selectedPayment}
                        onSelectPayment={handleSelectPayment}
                    />

                    <Pressable onPress={handlePayment} style={styles.payButton}>
                        <Text style={styles.payButtonText}>Click to Pay</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    },
    scrollContainer: {
        flex: 1,
    },
    content: {
        padding: 24,
        gap: 16,
    },
    payButton: {
        width: '100%',
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#53377A',
        marginTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CheckoutScreen;
