/** @format */

import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TCardProps } from "@/types/card";
import images from "@/constants/images";
import icons from "@/constants/icons";

const FeatureCard: React.FC<TCardProps> = ({ onPress }) => {
    return (
        <TouchableOpacity className='flex flex-col items-start w-60 h-80 relative'>
            <Image source={images.japan} className='size-full rounded-2xl' />
            <Image
                source={images.cardGradient}
                className='size-full rounded-2xl absolute bottom-0'
            />
            <View className='py-1.5 flex-row items-center bg-white/90 px-3 rounded-full top-5 absolute right-5'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>
                    4.4
                </Text>
            </View>
            <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
                <Text
                    className='text-xl text-white font-rubik-extrabold'
                    numberOfLines={1}
                >
                    Modern Apartment
                </Text>
                <Text
                    className='text-base text-white font-rubik'
                    numberOfLines={1}
                >
                    22 W 15t St, New York
                </Text>
                <View className='flex flex-row items-center justify-between w-full'>
                    <Text
                        className='text-xl text-white font-extrabold'
                        numberOfLines={1}
                    >
                        $2.500
                    </Text>
                    <Image source={icons.heart} className='size-5' />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FeatureCard;
