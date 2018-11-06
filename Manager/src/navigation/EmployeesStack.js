import { createStackNavigator } from 'react-navigation';
import EmployeeList from './../components/EmployeeList';
import EmployeeCreate from './../components/EmployeeCreate';
import EmployeeEdit from './../components/EmployeeEdit';

const EmployeesStack = createStackNavigator({
   EmployeeList,
   EmployeeCreate,
   EmployeeEdit
},
{
   initialRouteName: 'EmployeeList',
   headerMode: 'screen'
});

export default EmployeesStack;
