import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Auth/Login';
import ListTransaksi from '../Screens/ListTransaksi';
import InputTransaksi from '../Screens/ListTransaksi/InputTransaksi';
import ListBarang from '../Screens/ListBarang';
import InputBarang from '../Screens/ListBarang/InputBarang';
import EditBarang from '../Screens/ListBarang/EditBarang';
import EditTransaksi from '../Screens/ListTransaksi/EditTransaksi';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    const Barang = () => (
        <MaterialIcons name="list-alt" size={25} color="black" />
    );
    const Transaksi = () => (
        <MaterialIcons name="receipt-long" size={25} color="black" />
    );
    return (
        <Drawer.Navigator initialRouteName="Drawer">
            <Drawer.Screen
                name="listBarang"
                component={ListBarang}
                options={{
                    title: 'List Barang',
                    headerShown: false,
                    drawerLabel: 'List Barang',
                    drawerIcon: Barang
                }}
            />
            <Drawer.Screen
                name="listTransaksi"
                component={ListTransaksi}
                options={{
                    title: 'List Transaksi',
                    headerShown: false,
                    drawerLabel: 'List Transaksi',
                    drawerIcon: Transaksi
                }}
            />
        </Drawer.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="listBarang"
                    component={DrawerNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="inputBarang"
                    component={InputBarang}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="editBarang"
                    component={EditBarang}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="inputTransaksi"
                    component={InputTransaksi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="editTransaksi"
                    component={EditTransaksi}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;