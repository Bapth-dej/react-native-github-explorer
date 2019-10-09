import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, Keyboard } from 'react-native';

import { SearchBarComponent } from './src/components/SearchBarComponent';
import { User } from './src/components/User';

export default App = () => {
    const support = Platform.select({
        ios: 'iOS',
        android: 'Android'
    });

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = search => {
        Keyboard.dismiss();
        setSearchValue(search);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.h1}>GITHUB EXPLORER</Text>
            <SearchBarComponent handleSearchChange={handleSearchChange} />
            <ScrollView>
                <User user={searchValue} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(230, 255, 255)'
    },
    toolBar: {},
    h1: {
        fontSize: 30,
        marginTop: 0.67,
        marginBottom: 0.67,
        marginLeft: 0,
        marginRight: 0,
        fontWeight: 'bold',
        backgroundColor: 'rgb(100, 216, 230)',
        textAlign: 'center',
        padding: 3
    },
    content: {
        alignItems: 'center'
    }
});
