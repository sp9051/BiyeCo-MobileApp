import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import TabNavigation from './TabNavigation';
import ProfileCard from './ProfileCard';
import BottomNavigation from './BottomNavigation';

const MatchesScreen = () => {
  const [activeTab, setActiveTab] = useState('recommended');

  return (
    <View style={styles.container}>
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <ProfileCard />
        </View>
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    maxWidth: 384,
    alignSelf: 'center',
    width: '100%'
  },
  content: {
    flex: 1
  },
  cardContainer: {
    padding: 20
  }
});

export default MatchesScreen;
