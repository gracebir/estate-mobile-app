/** @format */

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/global-prodiver";
import icons from "@/constants/icons";
import SearchInput from "@/components/SearchInput";
import Card from "@/components/cards/Card";
import FeatureCard from "@/components/cards/FeatureCard";

const Home = () => {
    const { user } = useGlobalContext();
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='px-5'>
                <View className='flex flex-row items-center justify-between mt-5'>
                    <View className='flex flex-row items-center gap-3'>
                        <Image
                            className='size-12 rounded-full'
                            source={{ uri: user?.avatar }}
                        />
                        <View>
                            <Text className='text-xs text-black-200 font-rubik-semibold'>
                                Hello
                            </Text>
                            <Text className='text-base text-black-300 font-rubik-medium'>
                                {user?.name}
                            </Text>
                        </View>
                    </View>
                    <Image source={icons.bell} className='size-6' />
                </View>
                <SearchInput />
            </View>
            <View className='my-5 px-5'>
                <View className='flex flex-row items-center justify-between'>
                    <Text className='text-black-300 font-rubik-bold text-xl'>
                        Features
                    </Text>
                    <TouchableOpacity>
                        <Text className='text-primary-300 font-rubik-bold'>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FeatureCard />
            <Card />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({});
