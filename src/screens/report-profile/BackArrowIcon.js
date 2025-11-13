import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackArrowIcon = ({ width = 18, height = 20, color = "#4B5563" }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 18 20" fill="none">
            <Path
                d="M0.366211 9.11719C-0.12207 9.60547 -0.12207 10.3984 0.366211 10.8867L6.61621 17.1367C7.10449 17.625 7.89746 17.625 8.38574 17.1367C8.87402 16.6484 8.87402 15.8555 8.38574 15.3672L4.26465 11.25H16.249C16.9404 11.25 17.499 10.6914 17.499 10C17.499 9.30859 16.9404 8.75 16.249 8.75H4.26855L8.38184 4.63281C8.87012 4.14453 8.87012 3.35156 8.38184 2.86328C7.89356 2.375 7.10059 2.375 6.61231 2.86328L0.362305 9.11328L0.366211 9.11719Z"
                fill={color}
            />
        </Svg>
    );
};

export default BackArrowIcon;
