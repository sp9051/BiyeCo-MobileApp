import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ForwardIcon = ({ width = 16, height = 18, color = "white" }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 16 18" fill="none">
            <Path
                d="M15.4195 9.79473C15.859 9.35527 15.859 8.6416 15.4195 8.20215L9.79453 2.57715C9.35508 2.1377 8.64141 2.1377 8.20195 2.57715C7.7625 3.0166 7.7625 3.73027 8.20195 4.16973L11.9109 7.8752H1.125C0.502734 7.8752 0 8.37793 0 9.0002C0 9.62246 0.502734 10.1252 1.125 10.1252H11.9074L8.20547 13.8307C7.76602 14.2701 7.76602 14.9838 8.20547 15.4232C8.64492 15.8627 9.35859 15.8627 9.79805 15.4232L15.423 9.79824L15.4195 9.79473Z"
                fill={color}
            />
        </Svg>
    );
};

export default ForwardIcon;
