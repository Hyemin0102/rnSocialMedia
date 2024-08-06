import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screen/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
