import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FormHeader from './FormHeader';
import ProgressIndicator from './ProgressIndicator';
import FormSection from './FormSection';
import InputField from './InputField';
import PhoneInput from './PhoneInput';
import EmailVerification from './EmailVerification';
import PrivacyNotice from './PrivacyNotice';
import ContinueButton from './ContinueButton';
import { UserPlusIcon } from './Icons';

const ContactDetailsForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');

  const handleBackPress = () => {
    // Handle back navigation
    console.log('Back pressed');
  };

  const handleVerifyEmail = () => {
    setIsEmailVerified(true);
  };

  const handleContinue = () => {
    // Handle form submission
    console.log('Continue pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <FormHeader title="Your Details" onBackPress={handleBackPress} />

          <ProgressIndicator currentStep={3} totalSteps={8} percentage={37} />

          <FormSection
            title="Your Contact Details"
            icon={<UserPlusIcon color="#54387A" />}
          >
            <View style={styles.nameRow}>
              <View style={styles.nameField}>
                <InputField
                  label="First Name"
                  placeholder="First name"
                  value={firstName}
                  onChangeText={setFirstName}
                  required
                />
              </View>
              <View style={styles.nameField}>
                <InputField
                  label="Last Name"
                  placeholder="Last name"
                  value={lastName}
                  onChangeText={setLastName}
                  required
                />
              </View>
            </View>

            <EmailVerification
              label="Email Address"
              placeholder="parent@example.com"
              value={email}
              onChangeText={setEmail}
              onVerify={handleVerifyEmail}
              isVerified={isEmailVerified}
              required
            />

            <PhoneInput
              label="Phone Number"
              placeholder="98765XXXXX"
              value={phone}
              onChangeText={setPhone}
              required
            />
          </FormSection>

          <FormSection
            title="Candidate's Contact Details"
            icon={<UserPlusIcon color="#4B5563" />}
            backgroundColor="#F9FAFB"
          >
            <InputField
              label="Candidate's Email"
              placeholder="bride@example.com"
              value={candidateEmail}
              onChangeText={setCandidateEmail}
              keyboardType="email-address"
            />

            <PhoneInput
              label="Candidate's Phone"
              placeholder="98765XXXXX"
              value={candidatePhone}
              onChangeText={setCandidatePhone}
            />
          </FormSection>

          <PrivacyNotice />

          <ContinueButton onPress={handleContinue} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    fontFamily: 'Inter',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    maxWidth: 386,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  nameRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  nameField: {
    flex: 1,
  },
});

export default ContactDetailsForm;
