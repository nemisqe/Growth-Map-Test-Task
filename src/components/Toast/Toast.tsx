import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@utils/theme";
import { GlassView } from "expo-glass-effect";
import { useEffect, useMemo, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { TOAST_ICONS } from "./Toast.consts";
import { createStyles } from "./Toast.styles";
import { ToastConfig } from "./Toast.types";
import { getToastColor } from "./Toast.utils";

type Props = ToastConfig & {
  onHide: () => void;
};

export function Toast({ type, message, duration = 3000, onHide }: Props) {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const iconColor = useMemo(() => getToastColor(type, theme), [type, theme]);
  
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onHide());
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onHide, translateY]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <GlassView style={styles.toast} glassEffectStyle="regular" tintColor={theme.colors.card.background}>
        <View style={styles.glassView}>
          <Ionicons name={TOAST_ICONS[type].name} size={20} color={iconColor} />
          <Text style={styles.message}>{message}</Text>
          <Ionicons name="close" size={20} color={theme.colors.text.primary} onPress={onHide} />
        </View>
      </GlassView>
    </Animated.View>
  );
}

