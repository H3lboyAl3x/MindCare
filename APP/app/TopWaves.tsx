import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const TopWaves = () => {
    return(
        <Svg height='130' width='100%' viewBox="0 0 1440 320">
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <Stop offset='10%' stopColor="#42CE32" />
                <Stop offset='100%' stopColor="#38C92B" />
                </LinearGradient>
            </Defs>
            <Path
                fill="url(#grad)"
                d="M0, 128L60, 122.7C120, 117, 240, 107, 360, 101.3C480, 96, 600, 96, 720, 106.7C840, 117, 960, 139, 1080, 154.7C1200, 171, 1320, 181, 1380, 186.7L1440, 192L1440, 0L1380, 0C1320, 0, 1200, 0, 1080, 0C960, 0, 840, 0, 720, 0C600, 0, 480, 0, 360, 0C240, 0, 120, 0, 60, 0L0, 0Z"
            />
        </Svg>
    );
}