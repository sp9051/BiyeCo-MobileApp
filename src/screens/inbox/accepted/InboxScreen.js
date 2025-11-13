import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import TabNavigation from './TabNavigation';
import FilterButton from './FilterButton';
import ProfileCard from './ProfileCard';
import BottomNavigation from './BottomNavigation';

const InboxScreen = () => {
  const [activeTab, setActiveTab] = useState('Accepted');
  const [profiles] = useState([
    {
      id: 1,
      username: 'TBC_86xxxxx31',
      age: 26,
      profession: 'Engineer',
      gender: 'NM',
      location: 'Dhaka',
      matchPercentage: '96% Match',
      canChat: true,
    },
    {
      id: 2,
      username: 'TBC_86xxxxx32',
      age: 26,
      profession: 'Doctor',
      gender: 'W',
      location: 'Dhaka',
      matchPercentage: '96% Match',
      canChat: false,
    },
    {
      id: 3,
      username: 'TBC_86xxxxx33',
      age: 26,
      profession: 'Teacher',
      gender: 'D',
      location: 'Dhaka',
      matchPercentage: '96% Match',
      canChat: true,
    },
  ]);

  const handleFilterPress = () => {
    // Handle filter functionality
    console.log('Filter pressed');
  };

  return (
    <View style={styles.container}>
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <View style={styles.filterContainer}>
        <FilterButton onPress={handleFilterPress} />
      </View>
      <ScrollView style={styles.profilesContainer} showsVerticalScrollIndicator={false}>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  filterContainer: {
    alignItems: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  profilesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
});

export default InboxScreen;
