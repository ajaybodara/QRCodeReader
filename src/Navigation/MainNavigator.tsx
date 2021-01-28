import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import Reader from '../Screens/Reader';
import { RootStackParamList } from '../Navigation/RootStackParamList';


const Stack = createStackNavigator<RootStackParamList>();

class MainNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "black",
                }}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Reader"
                    component={Reader}
                />
            </Stack.Navigator>
        );
    }
}

export default MainNavigator;