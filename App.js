import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//All Views
import Main from './app/views/Main.js';
import Login from './app/views/Login.js';
import Chat from './app/views/Chat.js';
import NewChat from './app/views/NewChat.js';

const AppNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Login: { screen: Login },
    Chat: { screen: Chat },
    NewChat: { screen: NewChat }
  },
  {
    initialRouteName: 'Main'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
