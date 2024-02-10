import 'react-native-gesture-handler';
import { PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/app/login/index';
import Home from './src/app/Home/index';
import { Routes } from './src/shared/configuration/routes';
import { COLORS } from './src/shared/utils/constant';
import { StatusBar, Platform, View } from 'react-native';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
    return (
        <PaperProvider>
            <NavigationContainer >
                <Drawer.Navigator
                    initialRouteName={Routes.Login}
                    renderScene={({ route, navigation }) => {
                        return (
                            <View style={{ flex: 1 }}>
                                <StatusBar barStyle="light-content" backgroundColor={COLORS.black} />
                                <Text>hola</Text>
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
                    <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false, headerBackVisible: false }} />
                    <Stack.Screen name={Routes.Home} component={Home} options={{ headerShown: true, headerBackVisible: false }} />
                </Drawer.Navigator>
            </NavigationContainer>

        </PaperProvider>
    );
}



export default App;