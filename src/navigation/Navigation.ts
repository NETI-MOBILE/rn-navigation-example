import {NavigationContainerRef} from '@react-navigation/core';
import * as React from 'react';
import {DrawerActions} from '@react-navigation/native';
import {Tabs} from './consts/tabs';

export interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef<any>>();

  initialRoute = Tabs.TAB_HOME;

  setInitialRoute = (route: any) => {
    this.initialRoute = route;
  };

  navigate = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  canGoBack = (): boolean => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    return this.navigationRef.current?.canGoBack() || false;
  };

  replace = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{name: routeName, params: params}],
        }),
      0,
    );
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };

  pop2 = () => {
    this.pop();
    this.pop();
  };

  openDrawer = () => {
    this.navigationRef.current?.dispatch(DrawerActions.openDrawer());
  };

  closeDrawer = () => {
    this.navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  };
}

const Navigation = new NavigationC();
export default Navigation;
