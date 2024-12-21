/** @format */

import {
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-prodiver";
import { Redirect } from "expo-router";

const Signin = () => {
    const { refetch, loading, isLogged } = useGlobalContext();
    if (!loading && isLogged) return <Redirect href={"/"} />;
    const handleSignin = async () => {
        const result = await login();
        console.log(result);
        if (result) {
            console.log("login success");
            refetch();
        } else {
            Alert.alert("Error", "Failed to login");
        }
    };
    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView contentContainerClassName='h-full'>
                <Image
                    source={images.onboarding}
                    className='w-full h-4/6'
                    resizeMode='contain'
                />
                <View className='px-10'>
                    <Text className='text-base text-center uppercase font-rubik text-black-200'>
                        Welcome to ReState
                    </Text>
                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                        Let's Get You CLoser {"\n"}to{" "}
                        <Text className='text-primary-300'>
                            Your Ideal Home
                        </Text>
                    </Text>
                    <Text className='text-base text-center mt-4 font-rubik text-black-100'>
                        Login to Real Scout with Google
                    </Text>

                    <TouchableOpacity
                        onPress={handleSignin}
                        className='bg-white shadow-md  shadow-zinc-300 rounded-full w-full py-4 mt-5'
                    >
                        <View className='flex flex-row items-center gap-2 w-full border border-white justify-center'>
                            <Image
                                source={icons.google}
                                className='w-5 h-5'
                                resizeMode='contain'
                            />
                            <Text className='text-black-300 font-rubik-medium'>
                                Sign Up with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signin;
