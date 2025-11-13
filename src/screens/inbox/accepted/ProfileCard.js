import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const ProfileCard = ({ profile }) => {
  const renderChatButton = () => {
    if (profile.canChat) {
      return (
        <TouchableOpacity style={[styles.chatButton, styles.chatButtonEnabled]}>
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              d="M18 10c0 4.418-3.582 8-8 8-1.223 0-2.378-.275-3.414-.767L2 18l.767-4.586A7.953 7.953 0 012 10c0-4.418 3.582-8 8-8s8 3.582 8 8z"
              fill="#fff"
            />
          </Svg>
          <Text style={styles.chatButtonTextEnabled}>Start Chat</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={[styles.chatButton, styles.chatButtonDisabled]}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Rect x="2" y="7" width="12" height="7" rx="1" fill="#999" />
            <Path
              d="M5 7V5a3 3 0 016 0v2"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
          <Text style={styles.chatButtonTextDisabled}>Upgrade to Chat</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.avatar}>
          <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <Circle cx="20" cy="14" r="6" fill="#9b6fc9" />
            <Path
              d="M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12"
              fill="#9b6fc9"
            />
          </Svg>
        </View>
        <View style={styles.details}>
          <View style={styles.nameRow}>
            <Text style={styles.username}>{profile.username}</Text>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Circle cx="10" cy="10" r="10" fill="#9b6fc9" />
              <Path
                d="M6 10l3 3 5-6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text style={styles.basicInfo}>
            {profile.age} | {profile.profession} | {profile.gender} | {profile.location}
          </Text>
          <View style={styles.badges}>
            <View style={styles.mutualBadge}>
              <Text style={styles.mutualText}>Mutual Interest</Text>
            </View>
            <View style={styles.matchBadge}>
              <Text style={styles.matchText}>{profile.matchPercentage}</Text>
            </View>
          </View>
        </View>
      </View>
      {renderChatButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: '#e8d9f5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    gap: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  basicInfo: {
    fontSize: 14,
    color: '#666',
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  mutualBadge: {
    backgroundColor: '#f3e8ff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  mutualText: {
    fontSize: 13,
    color: '#9b6fc9',
    fontWeight: '500',
  },
  matchBadge: {
    backgroundColor: '#9b6fc9',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  matchText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
  chatButton: {
    width: '100%',
    marginTop: 16,
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  chatButtonEnabled: {
    backgroundColor: '#5b3a8f',
  },
  chatButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  chatButtonTextEnabled: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  chatButtonTextDisabled: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
  },
});

export default ProfileCard;
