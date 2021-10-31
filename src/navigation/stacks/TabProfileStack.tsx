import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../../screens/tabs/profile/ProfileScreen';
import {Screens} from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
