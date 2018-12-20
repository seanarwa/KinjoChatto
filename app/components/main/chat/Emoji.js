import React, {Component} from 'react';
import { Alert, Platform, StyleSheet, Text, View} from 'react-native';
import Emoticons from 'react-native-emoticons';

 type Props = {};
 export default class Emoji extends Component<Props> {

   constructor(props) {
    super(props);
    this.state =  {showEmoticons: false };
  }


   _onEmoticonPress(){
     this.setState({showEmoticons: true});
   }

   _onBackspacePress(){
     Alert.alert("backspace motherfucker")
   }

   render() {
     return (
       <View>
         <Emoticons
              onEmoticonPress={this._onEmoticonPress.bind(this)}
              onBackspacePress={this._onBackspacePress.bind(this)}
              show={this.state.showEmoticons} //true means it doesn't show, false means it shows
              concise={true}
              showHistoryBar={true}
              showPlusBar={true}
          />
       </View>
     );
   }
 }
