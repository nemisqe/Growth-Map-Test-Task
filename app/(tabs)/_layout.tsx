import { useTheme } from '@utils/theme';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';

export default function TabLayout() {
  const { theme } = useTheme();
  
  return (
    <NativeTabs tintColor={theme.colors.colors.black}>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="custom_android_drawable" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
