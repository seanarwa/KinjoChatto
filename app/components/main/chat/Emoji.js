import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Emoticons from 'react-native-emoticons';

 type Props = {};
 export default class Emoji extends Component<Props> {

   render() {
     return (
       <View>
         <Emoticons
              // onEmoticonPress={this._onEmoticonPress.bind(this)}
              // onBackspacePress={this._onBackspacePress.bind(this)}
              // show={this.state.showEmoticons}
              concise={true}
              showHistoryBar={true}
              showPlusBar={true}
          />
       </View>
     );
   }
 }
