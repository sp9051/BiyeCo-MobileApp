import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import NotificationBadge from './NotificationBadge';

const NavigationTab = ({
  icon,
  label,
  isActive = false,
  onPress,
  showBadge = false,
  badgeStyle
}) => {
  const textColor = isActive ? '#5a4a7d' : '#9d9d9d';
  const iconColor = isActive ? '#5a4a7d' : '#9d9d9d';

  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
    >
      <View style={styles.iconContainer}>
        {React.cloneElement(icon, { color: iconColor })}
        {showBadge && <NotificationBadge style={badgeStyle} />}
      </View>
      <Text style={[
        styles.label,
        { color: textColor },
        isActive && styles.activeLabel
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  iconContainer: {
    position: 'relative',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '600',
  },
});

export default NavigationTab;
