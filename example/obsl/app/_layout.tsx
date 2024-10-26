import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MenuIcon } from '../assets/icons/menu-icon';
import { AvatarIcon } from '../assets/icons/avatar-icon';
import { SettingsIcon } from '../assets/icons/setting-icon';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { root } from '../constants/style';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: root.blackColor,
          },
          tabBarActiveTintColor:
            root.mainTabBarTextColor, // Цвет для активной вкладки
          tabBarInactiveTintColor:
            root.whiteColor, // Цвет для неактивных вкладок
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Главная',
            tabBarIcon: ({ size, color }) => (
              <MenuIcon
                width={size}
                height={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Настройки',
            tabBarIcon: ({ size, color }) => (
              <SettingsIcon
                width={size}
                height={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: 'Пользователь',
            tabBarIcon: ({ size, color }) => (
              <AvatarIcon
                width={size}
                height={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  tabBar: {},
});
