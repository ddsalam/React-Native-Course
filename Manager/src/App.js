import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RootStack from './navigation';
import NavigationService from './NavigationService';
import firebaseConfig from './config/firebase.config.json';

export default class App extends Component {
   componentDidMount() {
      if (!firebase.apps.length) {
         firebase.initializeApp(firebaseConfig);
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
