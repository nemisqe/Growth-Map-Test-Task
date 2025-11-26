import { BaseScreen } from '@components/BaseScreen';
import { SwitchButton } from '@components/SwitchButton/SwitchButton';
import { useTheme } from '@utils/theme';

export function SettingsScreen() {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <BaseScreen headerProps={{ headerTitle: 'Settings' }}>
      <SwitchButton title="Dark Mode" value={isDarkMode} onChange={toggleTheme} />
    </BaseScreen>
  )
}