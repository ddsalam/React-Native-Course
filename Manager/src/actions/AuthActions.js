import firebase from 'firebase';
import NavigationService from './../NavigationService';
import { 
   EMAIL_CHANGED, 
   PASSWORD_CHANGED, 
   LOGIN_USER_SUCCESS, 
   LOGIN_USER_FAIL,
   LOGIN_USER
} from './types';

export const emailChanged = text => ({
   type: EMAIL_CHANGED,
   payload: text
});

export const passwordChanged = text => ({
   type: PASSWORD_CHANGED,
   payload: text
});

export const loginUser = ({ email, password }) => (dispatch => {
   const dispatchFail = () => dispatch({ type: LOGIN_USER_FAIL });

   dispatch({ type: LOGIN_USER });

   firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(user => dispatchSuccess(dispatch, user))
      .catch(dispatchFail);
});

const dispatchSuccess = (dispatch, user) => {
   dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
   NavigationService.navigateToRoot('Employees');
};
