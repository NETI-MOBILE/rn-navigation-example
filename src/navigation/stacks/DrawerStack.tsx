import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Drawer from '../drawer/Drawer';
import {Stacks} from '../consts/stacks';

const Stack = createStackNavigator();

export const DrawerStack = (
  <>
    <Stack.Screen name={Stacks.DRAWER_STACK} component={Drawer} />
  </>
);
