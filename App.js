import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/app/login/index';
import { Routes } from './src/shared/route/routes';
const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <PaperProvider>
                <Stack.Navigator
                    initialRouteName={Routes.Login}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name={Routes.Login} component={Login} />
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => Main);