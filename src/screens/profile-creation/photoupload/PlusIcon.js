import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = ({ color = "#53377A", size = 21 }) => {
    return (
        <Svg width={size} height={size + 3} viewBox="0 0 21 24" fill="none">
            <Path
                d="M12 3.75C12 2.92031 11.3297 2.25 10.5 2.25C9.67031 2.25 9 2.92031 9 3.75V10.5H2.25C1.42031 10.5 0.75 11.1703 0.75 12C0.75 12.8297 1.42031 13.5 2.25 13.5H9V20.25C9 21.0797 9.67031 21.75 10.5 21.75C11.3297 21.75 12 21.0797 12 20.25V13.5H18.75C19.5797 13.5 20.25 12.8297 20.25 12C20.25 11.1703 19.5797 10.5 18.75 10.5H12V3.75Z"
                fill={color}
            />
        </Svg>
    );
};

export default PlusIcon;
