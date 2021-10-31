import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/tabs/home/HomeScreen';
import {Screens} from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
