import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Screens} from '../consts/screens';
import Tabs from '../tabs/Tabs';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={Screens.MAIN_APP} component={Tabs} />
  </>
);
