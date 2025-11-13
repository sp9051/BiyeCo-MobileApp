import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.planDetails}>
        <Text style={styles.planName}>Elite Plan</Text>
        <Text style={styles.planDescription}>3 months subscription</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹8,999</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>₹8,999</Text>
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
    marginBottom: 20,
  },
  planDetails: {
    marginBottom: 16,
  },
  planName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  planDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280',
  },
  priceContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  totalContainer: {
    borderTopWidth: 0.667,
    borderTopColor: '#F3F4F6',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
});

export default OrderSummary;
