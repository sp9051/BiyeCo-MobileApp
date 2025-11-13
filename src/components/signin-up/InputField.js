import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const EmailIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
      fill="#9CA3AF"
    />
  </Svg>
);

const EyeIcon = () => (
  <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
    <Path
      d="M1.21268 0.159551C0.887676 -0.0966993 0.415801 -0.0373243 0.159551 0.287676C-0.0966993 0.612676 -0.0373243 1.08455 0.287676 1.3408L18.7877 15.8408C19.1127 16.097 19.5846 16.0377 19.8408 15.7127C20.0971 15.3877 20.0377 14.9158 19.7127 14.6596L16.4252 12.0846C17.6627 10.8158 18.5002 9.39392 18.9221 8.38455C19.0252 8.13768 19.0252 7.86268 18.9221 7.6158C18.4564 6.50018 17.4783 4.87518 16.0158 3.51893C14.5471 2.15018 12.5252 1.00018 10.0002 1.00018C7.86893 1.00018 6.09393 1.82205 4.70955 2.90018L1.21268 0.159551ZM6.97205 4.67205C7.76893 3.94393 8.83455 3.50018 10.0002 3.50018C12.4846 3.50018 14.5002 5.5158 14.5002 8.00018C14.5002 8.7783 14.3033 9.50955 13.9564 10.1471L12.7502 9.2033C13.0127 8.60018 13.0814 7.90955 12.9002 7.22518C12.5533 5.9283 11.4064 5.05643 10.1314 5.0033C9.95018 4.99705 9.84393 5.19393 9.90018 5.36893C9.9658 5.56893 10.0033 5.78143 10.0033 6.0033C10.0033 6.32205 9.9283 6.62205 9.79705 6.88768L6.97518 4.67518L6.97205 4.67205ZM11.6564 12.1846C11.1439 12.3877 10.5846 12.5002 10.0002 12.5002C7.5158 12.5002 5.50018 10.4846 5.50018 8.00018C5.50018 7.78455 5.5158 7.57518 5.54393 7.36893L2.59705 5.04705C1.88455 5.97518 1.37518 6.90018 1.0783 7.6158C0.975176 7.86268 0.975176 8.13768 1.0783 8.38455C1.54393 9.50018 2.52205 11.1252 3.98455 12.4814C5.4533 13.8502 7.47518 15.0002 10.0002 15.0002C11.4939 15.0002 12.8096 14.5971 13.9439 13.9846L11.6564 12.1846Z"
      fill="#9CA3AF"
    />
  </Svg>
);

export const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  type = 'text',
  onToggleVisibility,
  showVisibilityToggle = false
}) => {
  return (
    <View className="mb-8">
      <View className="mb-4">
        <Text className="text-gray-700 font-medium">{label}</Text>
      </View>
      <View className="relative">
        <View className="flex-row items-center border border-gray-300 px-3 py-2 bg-white" style={styles.InputField}>
          <TextInput
            className="flex-1 text-gray-900"
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#9CA3AF"
          />
          <View className="ml-2">
            {type === 'email' && <EmailIcon />}
            {showVisibilityToggle && (
              <TouchableOpacity onPress={onToggleVisibility}>
                <EyeIcon />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  InputField: {
    borderRadius: 12,
    // bottom shadow
    ...Platform.select({
      ios: {
        shadowColor: "#4C2B86",
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 0.12,
        shadowRadius: 30,
      },
      android: { elevation: 5 },
    }),
  },
  continueText: { color: "#fff", fontWeight: "500", fontSize: 18, marginRight: 12 },
  continueArrow: { color: "#fff", fontSize: 18 },
});