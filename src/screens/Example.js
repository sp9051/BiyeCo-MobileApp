import { View, Text, TextInput } from 'react-native';

export default function Example() {
    return (
        <View className="flex-1 items-center justify-center bg-gray-100">
            <Text className="text-xl font-bold text-blue-600 mb-4">Hello Tailwind!</Text>
            <TextInput
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 bg-white"
                placeholder="Type something..."
            />
        </View>
    );
}
