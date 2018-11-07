import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseConfig from './config/firebase.config.json';

export default class App extends Component {
   state = { loggedIn: null }

   componentDidMount() {
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            this.setState({ loggedIn: true });
         } else {
            this.setState({ loggedIn: false });
         }
      });
   }

   renderContent() {
      switch (this.state.loggedIn) {
         case true:
            return (
               <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Button onPress={() => firebase.auth().signOut()}>
                     Log Out
                  </Button>
               </View>
            );
      
         case false:
            return <LoginForm />;

         default:
            return <Spinner />;
      }      
   }

   render() {
      return (
         <View style={{ flex: 1 }}>
            <Header headerText={'Authentication'} />
            {this.renderContent()}
         </View>
      );
   }
}
