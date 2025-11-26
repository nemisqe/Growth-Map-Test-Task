import { ScreenHeader } from "@components/ScreenHeader";
import { useTheme } from "@utils/theme";
import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from './BaseScreen.styles';

type Props = {
  children: React.ReactNode;
  headerProps?: {
    headerTitle: string;
  }
}

export function BaseScreen({ children, headerProps }: Props) {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {headerProps && <ScreenHeader headerTitle={headerProps.headerTitle} />}
      {children}
    </SafeAreaView>
  )
}