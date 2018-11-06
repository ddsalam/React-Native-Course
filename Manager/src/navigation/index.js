import { createStackNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import EmployeesStack from './EmployeesStack';

const RootStack = createStackNavigator({
   Login: LoginStack,
   Employees: EmployeesStack
},
{
   initialRouteName: 'Login',
   headerMode: 'none'
});

export default RootStack;
