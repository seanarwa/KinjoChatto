import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
// import config from './config.js';
import awsmobile from './aws-exports.js';
import { debug } from './app.json';

//All Views
import Main from './app/views/Main.js';
import Login from './app/views/Login.js';
import Chat from './app/views/Chat.js';
import NewChat from './app/views/NewChat.js';

//All Test Views
import TestMain from './app/_TEST_/Main.js';

Amplify.configure(awsmobile);

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

const TestAppNavigator = createStackNavigator(
  {
    TestMain: { screen: TestMain }
  },
  {
    initialRouteName: 'TestMain'
  }
);


const AppContainer = createAppContainer(debug ? TestAppNavigator : AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default withAuthenticator(
                                  App,
                                  includeGreetings = true
                                );
