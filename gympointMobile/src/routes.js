import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from './components/Header';

import SignIn from './pages/SignIn';

import CheckIn from './pages/CheckIn';
import AskForHelp from './pages/AskForHelp';
import AnswerCheck from './pages/AnswerCheck';
import NewQuestion from './pages/NewQuestion';

export default (signedIn = false) => 
    createAppContainer(
        createSwitchNavigator({
            Sign: createSwitchNavigator({
                SignIn,
            }),
            App: createBottomTabNavigator({
                CheckInStack,
                HelpStack,
            }, {
                tabBarOptions: {
                    activeTintColor: '#ee4e61',
                    inactiveTintColoer: '#ccc',
                },
            },),
        }, {
            initialRouteName: signedIn ? 'App' : 'Sign',
            defaultNavigationOptions: {
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
        }),
    );

const CheckInStack = createStackNavigator({
    CheckInScreen: CheckIn,
}, {
    defaultNavigationOptions: {
        headerTitle: () => <Header />,
    },
    navigationOptions: {
        tabBarLabel: 'Check-ins',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='edit-location' size={24} color={tintColor} />
        ),
    },
});

const HelpStack = createStackNavigator({
    HelpScreen: AskForHelp,
    AnswerScreen: AnswerCheck,
    QuestionScreen: NewQuestion,
}, {
    defaultNavigationOptions: {
        headerTitle: () => <Header />,
    },
    navigationOptions: {
        tabBarLabel: 'Pedir ajuda',
        tabBarIcon: ({ tintColor }) => (
            <Icon name='live-help' size={24} color={tintColor} />
        ), 
    },
},);

