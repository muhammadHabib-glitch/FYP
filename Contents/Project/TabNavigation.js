import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from './ChatScreen';
import FAQ from './FAQ';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="FAQ" component={FAQ} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
