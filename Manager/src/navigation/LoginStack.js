import { createStackNavigator } from 'react-navigation';
import LoginForm from '../components/LoginForm';

const LoginStack = createStackNavigator({
   Login: LoginForm,
},
{
   initialRouteName: 'Login',
   headerMode: 'screen'
});

export default LoginStack;
