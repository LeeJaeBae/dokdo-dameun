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
/* -- bash


--

 */

// delete string regex in bash shell
// for i in *; do mv "$i" "${i//sometext/}"; done

// delete ' ' in bash shell
// for i in *; do mv "$i" "${i// /}"; done

// change string regex in bash shell text1 to ''
// for i in *; do mv "$i" "${i//text1/}"; done

// rename * to 'sometext+index' in bash shell with regex
// for i in *; do mv "$i" "sometext${i}"; done
