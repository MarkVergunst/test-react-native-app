import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from './src/components/login'
import Dashboard from './src/components/dashboard'


const RootStack = createStackNavigator({
    login: {
        screen: Login
    },
    dashboard: {
        screen: Dashboard
    },
});

export default createAppContainer(RootStack);

