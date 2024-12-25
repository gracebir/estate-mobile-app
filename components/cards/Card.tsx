/** @format */

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { TCardProps } from "@/types/card";

const Card: React.FC<TCardProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View className='rounded-xl flex flex-col bg-white border border-gray-100  flex-1 p-4'>
                <View className='w-full relative'>
                    <Image
                        source={images.newYork}
                        className='w-full h-40 rounded-xl'
                    />
                    <View className='py-1 flex flex-row items-center bg-white/90 px-2 rounded-full top-2 absolute right-3'>
                        <Image source={icons.star} className='size-3' />
                        <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>
                            4.48
                        </Text>
                    </View>
                </View>
                <View className='flex flex-col gap-1 mt-3 w-full'>
                    <Text
                        className='text-base font-rubik-extrabold'
                        numberOfLines={1}
                    >
                        La Grand Maison
                    </Text>
                    <Text
                        className='text-sm font-rubik text-black-200'
                        numberOfLines={1}
                    >
                        Tokyo, Japan
                    </Text>
                    <View className='flex flex-row items-center  justify-between w-full'>
                        <Text
                            className='text-base text-primary-300 font-rubik-bold '
                            numberOfLines={1}
                        >
                            $2.500
                        </Text>
                        <Image
                            source={icons.heart}
                            className='size-5'
                            tintColor={"#191d31"}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
