import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuIcon, SearchIcon, MoreIcon } from './IconComponents';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.iconButton}
          accessibilityLabel="Menu"
        >
          <MenuIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.iconButton}
          accessibilityLabel="Search"
        >
          <SearchIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          accessibilityLabel="More options"
        >
          <MoreIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default ChatHeader;
