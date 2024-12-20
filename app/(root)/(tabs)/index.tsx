/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
    return (
        <View>
            <Text className='text-xl text-green-300 font-bold text-center'>
                index
            </Text>
            <Link href={"/sign-in"}>Signin</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/properties/1"}>Properties</Link>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
