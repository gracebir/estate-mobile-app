/** @format */

import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface SettingsItemProp {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
}

const SettingTile: React.FC<SettingsItemProp> = ({
    icon,
    title,
    onPress,
    textStyle,
    showArrow = true,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className='flex flex-row items-center justify-between py-3'
        >
            <View className='flex flex-row items-center gap-3'>
                <Image source={icon} className='size-6' />
                <Text
                    className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
                >
                    {title}
                </Text>
            </View>

            {showArrow && (
                <Image source={icons.rightArrow} className='size-5' />
            )}
        </TouchableOpacity>
    );
};

export default SettingTile;
