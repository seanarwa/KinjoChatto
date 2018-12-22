import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import config from './config.js';

//All Views
import Main from './app/views/Main.js';
import Login from './app/views/Login.js';
import Chat from './app/views/Chat.js';
import NewChat from './app/views/NewChat.js';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: config.cognito.IDENTITY_POOL_ID,

        // REQUIRED - Amazon Cognito Region
        region: config.cognito.REGION,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region
        // Required only if it's different from Amazon Cognito Region
        // identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: config.cognito.USER_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: config.cognito.APP_CLIENT_ID//,

        // // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        // mandatorySignIn: false,
        //
        // // OPTIONAL - Configuration for cookie storage
        // cookieStorage: {
        // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //     domain: '.yourdomain.com',
        // // OPTIONAL - Cookie path
        //     path: '/',
        // // OPTIONAL - Cookie expiration in days
        //     expires: 365,
        // // OPTIONAL - Cookie secure flag
        //     secure: true
        // },
        //
        // // OPTIONAL - customized storage object
        // storage: new MyStorage(),
        //
        // // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        // authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});

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

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default withAuthenticator(App);
