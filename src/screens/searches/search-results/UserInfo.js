import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoItem from './InfoItem';
import { EducationIcon, HeartIcon, LocationIcon } from './Icons';

const UserInfo = ({
  age = 25,
  profession = "Software Developer",
  state = "NM",
  city = "Mumbai",
  education = "Masters in Computer Science",
  relationshipStatus = "Looking for a life partner",
  distance = "Within 15 km from you"
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.basicInfo}>
        {age} | {profession} | {state} | {city}
      </Text>
      <View style={styles.infoItems}>
        <InfoItem
          icon={<EducationIcon />}
          text={education}
        />
        <InfoItem
          icon={<HeartIcon />}
          text={relationshipStatus}
        />
        <InfoItem
          icon={<LocationIcon />}
          text={distance}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  basicInfo: {
    fontSize: 16,
    color: '#787878',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 20,
    marginLeft: 0,
  },
  infoItems: {
    flexDirection: 'column',
    gap: 16,
  },
});

export default UserInfo;
