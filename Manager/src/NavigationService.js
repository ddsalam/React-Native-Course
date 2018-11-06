import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
   navigator = navigatorRef;
}

function navigate(routeName, params) {
   navigator.dispatch(
      NavigationActions.navigate({
         routeName,
         params,
      })
  );
}

function navigateToRoot(routeName, params) {
   navigator.dispatch(
      StackActions.reset({
         index: 0,
         key: null,
         actions: [
            NavigationActions.navigate({ routeName, params })
         ]
      })
   );
}

function pop() {
   navigator.dispatch(
      StackActions.pop()
   );
}

export default {
   navigate,
   navigateToRoot,
   pop,
   setTopLevelNavigator,
};
