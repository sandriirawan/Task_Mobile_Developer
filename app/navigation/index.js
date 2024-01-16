import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Auth/Login';
import ListTransaksi from '../Screens/ListTransaksi';
import InputTransaksi from '../Screens/ListTransaksi/InputTransaksi';
import ListBarang from '../Screens/ListBarang';
import InputBarang from '../Screens/ListBarang/InputBarang';



const Stack = createStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                {/* <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name="listBarang"
                    component={ListBarang}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="inputBarang"
                    component={InputBarang}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="listTransaksi"
                    component={ListTransaksi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="inputTransaksi"
                    component={InputTransaksi}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;