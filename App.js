import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import {  PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/app/login/index';
import Home from './src/app/Home/index';
import { Routes } from './src/shared/configuration/routes';
import { COLORS } from './src/shared/utils/constant';
import { StatusBar, View } from 'react-native';
import WCustomDrawer from './src/components/molecules/CustomDrawer';
import Products from './src/app/Products';
import WBarScanner from './src/components/molecules/BarScanner';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
    const navigationRef = useRef()
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;
    return (

        <>
            <PaperProvider>
                <NavigationContainer ref={navigationRef} >
                    <Drawer.Navigator
                        initialRouteName={Routes.Login}
                        drawerContent={props => <WCustomDrawer {...props} />}
                        renderScene={({ route, navigation }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <StatusBar barStyle="light-content" backgroundColor={COLORS.black} />
                                </View>
                            );
                        }}
                        screenOptions={({
                            route,
                        }) => ({
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: COLORS.primaryOrange,
                            },
                            headerTintColor: COLORS.white,
                            headerTitleAlign: 'center',
                            tabBarShowLabel: false,
                        })}
                    >
                        <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false, headerBackVisible: false}} />
                        <Stack.Screen name={Routes.Home} component={Home} options={{ headerShown: true, headerBackVisible: false , title: "Hola, Lucila Perez" }} />
                        <Stack.Screen  name={Routes.Products} component={Products} options={{ headerShown : true , headerBackVisible : false , title : "Calculadora"}} />
                        <Stack.Screen  name={Routes.Scanner} component={WBarScanner} options={{ headerShown : false , headerBackVisible : false , title : "Calculadora"}} />
                    </Drawer.Navigator>
                </NavigationContainer>

            </PaperProvider>
        </>
    );
}



export default App;