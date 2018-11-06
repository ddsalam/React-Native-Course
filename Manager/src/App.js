import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './navigation';
import NavigationService from './NavigationService';

export default class App extends Component {
   componentDidMount() {
      if (!firebase.apps.length) {
         const config = {
            apiKey: 'AIzaSyCuS_WErxa6Bv5Coldy8TOSf1mc579dwhU',
            authDomain: 'manager-116ae.firebaseapp.com',
            databaseURL: 'https://manager-116ae.firebaseio.com',
            projectId: 'manager-116ae',
            storageBucket: 'manager-116ae.appspot.com',
            messagingSenderId: '1035933984656'
         };
         
         firebase.initializeApp(config);
      }
   }

   render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      
      return (
         <Provider store={store}>
            <RootStack ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} />
         </Provider>
      );
   }
}
