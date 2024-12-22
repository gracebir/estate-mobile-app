/** @format */

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query: text }),
        500
    );
    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    };
    return (
        <View className='flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border mt-5 border-primary-100'>
            <View className='flex-1 flex flex-row items-center justify-start z-50'>
                <Image source={icons.search} className='size-5' />
                <TextInput
                    className='text-sm font-rubik text-black-300 ml-2 flex-1'
                    value={search}
                    onChangeText={handleSearch}
                    placeholder='Search for anything'
                />
            </View>
            <TouchableOpacity>
                <Image source={icons.filter} className='size-5' />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
