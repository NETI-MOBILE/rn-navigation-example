import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeDetailScreen from '../../screens/tabs/home/HomeDetailScreen';
import {Screens} from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HOME_DETAIL_SCREEN}
        component={HomeDetailScreen}
      />
    </Stack.Navigator>
  );
};
