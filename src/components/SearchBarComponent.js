import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const SearchBarComponent = ({ handleSearchChange }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = query => {
        setSearchValue(query);
    };

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={query => {
                    handleChange(query);
                }}
                value={searchValue}
                onIconPress={() => handleSearchChange(searchValue)}
                onSubmitEditing={() => handleSearchChange(searchValue)}
            />
        </View>
    );
};
