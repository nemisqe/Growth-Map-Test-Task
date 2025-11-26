import { useTheme } from "@utils/theme";
import { useMemo } from "react";
import { Switch, Text, TouchableOpacity } from "react-native";
import { createStyles } from "./SwitchButton.styles";

type Props = {
  title: string;
  value: boolean;
  onChange: () => void;
}

export function SwitchButton({ title, value, onChange }: Props) {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity onPress={onChange} style={styles.container} activeOpacity={0.7}>
      <Text style={styles.label}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ 
          false: theme.colors.text.secondary, 
          true: theme.colors.surface.accent 
        }}
        thumbColor={theme.colors.text.onAccent}
        ios_backgroundColor={theme.colors.text.secondary}
      />
    </TouchableOpacity>
  )
}