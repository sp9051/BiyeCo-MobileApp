import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackIcon from './BackIcon';
import BackButton from '../signin-up/BackButton';


const FormHeader = ({ title, onBackPress }) => {
    return (


        <View className="flex-row items-center py-6 position-relative justify-center">
            <BackButton onPress={onBackPress} />
            {/* <View className="flex-1 ml-4 justify-center"> */}
            <Text className="text-2xl font-bold text-gray-900 text-center"> {title}</Text>
            {/* </View> */}
        </View>
    );
};

export default FormHeader;
