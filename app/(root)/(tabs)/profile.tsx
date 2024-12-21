/** @format */

import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import SettingTile from "@/components/SettingTile";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-prodiver";
import { logout } from "@/lib/appwrite";

const Profile = () => {
    const { user, refetch } = useGlobalContext();
    const handleLogout = async () => {
        try {
            const result = await logout();
            console.log(result);
            if (result) {
                Alert.alert("Succes", "Logout with success");
                refetch();
            } else {
                Alert.alert("Error", "An error occurred while logging out");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <SafeAreaView className='bg-white'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-32 px-7'
            >
                <View className='flex flex-row items-center justify-between mt-5'>
                    <Text className='text-black-300 font-rubik-bold text-xl'>
                        Profile
                    </Text>
                    <Image source={icons.bell} className='size-5' />
                </View>
                <View className='flex flex-row justify-center mt-5'>
                    <View className='flex flex-col items-center gap-3 relative mt-5'>
                        <Image
                            source={images.avatar}
                            className='size-44 relative rounded-full'
                        />
                        <TouchableOpacity className='absolute bottom-11 right-2 rounded-full'>
                            <Image className='size-10' source={icons.edit} />
                        </TouchableOpacity>
                        <Text className='mt-2 text-xl font-rubik-bold'>
                            {user?.name}
                        </Text>
                    </View>
                </View>

                {/* setting */}

                <View className='flex flex-col gap-2 mt-10'>
                    <SettingTile icon={icons.calendar} title='My Bookings' />
                    <SettingTile icon={icons.wallet} title='Payments' />
                </View>
                <View className='flex flex-col mt-5 gap-2 border-t pt-5 border-primary-200'>
                    {settings.slice(2).map((item, index) => (
                        <SettingTile key={index} {...item} />
                    ))}
                </View>
                <View className='flex flex-col border-t mt-5 pt-5 border-primary-200'>
                    <SettingTile
                        icon={icons.logout}
                        title='Logout'
                        textStyle='text-danger'
                        showArrow={false}
                        onPress={handleLogout}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({});
