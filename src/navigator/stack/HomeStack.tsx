import CategoryScreen from '@/screens/Category/CategoryScreen';
import HomeScreen from '@/screens/Home/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CustomStackHeader from './header/CustomStackHeader';
import {getHeaderTitle} from '@react-navigation/elements';
import tailwind from 'twrnc';
import ItemScreen from '@/screens/Item/ItemScreen';
import ReviewScreen from '@/screens/Review/ReviewScreen';
import DetailScreen from '@/screens/Detail/DetailScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import ListScreen from '@/screens/List/ListScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerMode: 'screen',
                headerStyle: {
                    ...tailwind`h-8`,
                },
                header: props => {
                    const title: string = getHeaderTitle(
                        props.options,
                        props.route.name,
                    );
                    return <CustomStackHeader {...props} title={title} />;
                },
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => (
                        <SafeAreaView style={tailwind`w-full bg-white`}>
                            <StatusBar
                                barStyle="dark-content"
                                backgroundColor="white"
                            />
                        </SafeAreaView>
                    ),
                }}
            />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
            <Stack.Screen name="Review" component={ReviewScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
    );
}
