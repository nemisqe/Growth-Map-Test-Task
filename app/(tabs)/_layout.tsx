import { useTheme } from '@utils/theme';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  const { theme } = useTheme();
  
  return (
    <NativeTabs tintColor={theme.colors.state.info}>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="ic_home" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="ic_settings" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
