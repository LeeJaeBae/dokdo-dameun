import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawerContent from './draw/CustomDrawContent';
import HomeStack from './stack/HomeStack';

const Drawer = createDrawerNavigator();

export default function CoreNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerShown: false,
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Main" component={HomeStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
