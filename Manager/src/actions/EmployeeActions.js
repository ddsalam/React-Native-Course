import firebase from 'firebase';
import { YellowBox } from 'react-native';
import NavigationService from './../NavigationService';
import { 
   EMPLOYEE_UPDATE, 
   EMPLOYEE_RESET,
   EMPLOYEES_FETCH_SUCCESS
} from './types';

YellowBox.ignoreWarnings(['Setting a timer']);

export const employeeUpdate = ({ prop, value }) => ({
   type: EMPLOYEE_UPDATE,
   payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
   const { currentUser } = firebase.auth();

   return () => {
      firebase.database()
         .ref(`/users/${currentUser.uid}/employees`)
         .push({ name, phone, shift })
         .then(() => NavigationService.pop());
   };
};

export const employeeReset = () => ({
   type: EMPLOYEE_RESET
});

export const employeesFetch = () => {
   const { currentUser } = firebase.auth();

   return (dispatch) => {
      firebase.database()
         .ref(`/users/${currentUser.uid}/employees`)
         .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
         });
   };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
   const { currentUser } = firebase.auth();

   return () => {
      firebase.database()
         .ref(`/users/${currentUser.uid}/employees/${uid}`)
         .set({ name, phone, shift })
         .then(() => NavigationService.pop());
   };
};

export const employeeDelete = ({ uid }) => {
   const { currentUser } = firebase.auth();

   return () => {
      firebase.database()
         .ref(`/users/${currentUser.uid}/employees/${uid}`)
         .remove()
         .then(() => NavigationService.pop());
   };
};
