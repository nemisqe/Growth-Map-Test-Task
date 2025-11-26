import { useTheme } from '@utils/theme';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { createStyles } from './ScreenHeader.styles';

type Props = {
  headerTitle: string;
}

export function ScreenHeader({ headerTitle }: Props) {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  )
}