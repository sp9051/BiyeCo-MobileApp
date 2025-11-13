import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon, SearchIcon, NotificationIcon } from './Icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <HamburgerIcon />
        <Text style={styles.title}>Matches</Text>
      </View>
      <View style={styles.rightSection}>
        <SearchIcon />
        <View style={styles.notificationContainer}>
          <NotificationIcon showBadge={true} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#ffffff'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2d1b4e',
    margin: 0
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  notificationContainer: {
    position: 'relative'
  }
});

export default Header;
