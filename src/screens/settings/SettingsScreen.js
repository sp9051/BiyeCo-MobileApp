import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SettingsHeader from './SettingsHeader';
import SettingsSection from './SettingsSection';
import ToggleItem from './ToggleItem';
import NotificationToggleItem from './NotificationToggleItem';
import LanguageSelector from './LanguageSelector';
import MenuItem from './MenuItem';
import FooterSection from './FooterSection';
import StarIcon from './StarIcon';
import ShareIcon from './ShareIcon';
import LogoutIcon from './LogoutIcon';
import DeleteIcon from './DeleteIcon';

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [newMatches, setNewMatches] = useState(true);
    const [newMessages, setNewMessages] = useState(true);
    const [profileViews, setProfileViews] = useState(false);
    const [promotionalOffers, setPromotionalOffers] = useState(true);

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleLanguagePress = () => {
        // Handle language selection
        console.log('Language pressed');
    };

    const handleRatePress = () => {
        // Handle rate app
        console.log('Rate app pressed');
    };

    const handleSharePress = () => {
        // Handle share app
        console.log('Share app pressed');
    };

    const handleLogoutPress = () => {
        // Handle logout
        console.log('Logout pressed');
    };

    const handleDeletePress = () => {
        // Handle delete account
        console.log('Delete account pressed');
    };

    const handleTermsPress = () => {
        // Handle terms of service
        console.log('Terms pressed');
    };

    const handlePrivacyPress = () => {
        // Handle privacy policy
        console.log('Privacy pressed');
    };

    return (
        <View style={styles.container}>
            <SettingsHeader onBackPress={handleBackPress} />

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                {/* App Preferences Section */}
                <SettingsSection title="App Preferences">
                    <ToggleItem
                        title="Light / Dark Mode"
                        subtitle="Choose how Biye Co feels — soft light or serene dark."
                        isOn={isDarkMode}
                        onToggle={() => setIsDarkMode(!isDarkMode)}
                        style={styles.itemSpacing}
                    />

                    <ToggleItem
                        title="Push Notifications"
                        subtitle="Stay updated when there's a new match or message waiting."
                        isOn={pushNotifications}
                        onToggle={() => setPushNotifications(!pushNotifications)}
                        style={styles.itemSpacing}
                    />

                    <LanguageSelector onPress={handleLanguagePress} />
                </SettingsSection>

                {/* Notification Settings Section */}
                <SettingsSection title="Notification Settings">
                    <NotificationToggleItem
                        title="New Matches"
                        subtitle="Get alerts when compatible profiles connect."
                        isOn={newMatches}
                        onToggle={() => setNewMatches(!newMatches)}
                        style={styles.notificationItemSpacing}
                    />

                    <NotificationToggleItem
                        title="New Messages"
                        subtitle="Be notified when someone reaches out."
                        isOn={newMessages}
                        onToggle={() => setNewMessages(!newMessages)}
                        style={styles.notificationItemSpacing}
                    />

                    <NotificationToggleItem
                        title="Profile Views"
                        subtitle="See who's shown interest in you."
                        isOn={profileViews}
                        onToggle={() => setProfileViews(!profileViews)}
                        style={styles.notificationItemSpacing}
                    />

                    <NotificationToggleItem
                        title="Promotional Offers"
                        subtitle="Hear about new features and limited-time offers."
                        isOn={promotionalOffers}
                        onToggle={() => setPromotionalOffers(!promotionalOffers)}
                    />
                </SettingsSection>

                {/* Account Section */}
                <SettingsSection title="Account">
                    <MenuItem
                        icon={<StarIcon />}
                        title="Rate Biye Co"
                        subtitle="Tell us how your journey feels."
                        onPress={handleRatePress}
                    />

                    <MenuItem
                        icon={<ShareIcon />}
                        title="Share Biye Co"
                        subtitle="Invite someone to begin their own."
                        onPress={handleSharePress}
                    />

                    <MenuItem
                        icon={<LogoutIcon />}
                        title="Pause/ Logout"
                        subtitle="Step away securely, your data stays safe."
                        onPress={handleLogoutPress}
                    />

                    <View style={styles.lastMenuItem}>
                        <MenuItem
                            icon={<DeleteIcon />}
                            title="Delete Account"
                            subtitle="Permanently remove your profile (as per T&C guidelines)."
                            onPress={handleDeletePress}
                        />
                    </View>
                </SettingsSection>

                {/* Footer Section */}
                <FooterSection
                    onTermsPress={handleTermsPress}
                    onPrivacyPress={handlePrivacyPress}
                />
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
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 24,
    },
    itemSpacing: {
        marginBottom: 24,
    },
    notificationItemSpacing: {
        marginBottom: 20,
    },
    lastMenuItem: {
        marginBottom: 0,
    },
});

export default SettingsScreen;
