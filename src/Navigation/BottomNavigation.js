import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Topics from '../Screens/Topics';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Favourite from '../Screens/Favourite';
import {Colors} from '../Constant/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {FontSize, Fonts} from '../Constant/Fonts';
import Favourite2 from '../Screens/Favourite2';
import {wp} from '../Constant/Responsive';

const BottomStack = createBottomTabNavigator();

const FavouriteStack = createBottomTabNavigator();

const FavouriteScreen = () => (
  <FavouriteStack.Navigator
    initialRouteName="Favourite1"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        display: 'none',
      },
    }}>
    <FavouriteStack.Screen name="Favourite" component={Favourite} />
    <FavouriteStack.Screen name="Favourite2" component={Favourite2} />
  </FavouriteStack.Navigator>
);

export default function BottomNavigation() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarLabelStyle: {
          fontFamily: Fonts.urdu,
          includeFontPadding: false,
          fontSize: FontSize.M,
          color: 'rgba(255, 255, 255, 0.5)',
          marginBottom: wp(2),
        },
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <BottomStack.Screen
        name=" سرورق"
        component={Home}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={FontSize.L}
              color="rgba(255, 255, 255, 0.5)"
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="تلاش کریں"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search1"
              size={FontSize.L}
              color="rgba(255, 255, 255, 0.5)"
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="پسندیدہ"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="bookmark"
              size={FontSize.L}
              color="rgba(255, 255, 255, 0.5)"
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="فہرست"
        component={Topics}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="list"
              size={FontSize.L}
              color="rgba(255, 255, 255, 0.5)"
            />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
}
