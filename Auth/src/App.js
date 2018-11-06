import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
   state = { loggedIn: null }

   componentDidMount() {
      firebase.initializeApp({
         apiKey: 'AIzaSyAIrnnILsS3BnvKxxTMvOat2O-3GYnfXzo',
         authDomain: 'authentication-445c1.firebaseapp.com',
         databaseURL: 'https://authentication-445c1.firebaseio.com',
         projectId: 'authentication-445c1',
         storageBucket: 'authentication-445c1.appspot.com',
         messagingSenderId: '833961102280'
      });

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
