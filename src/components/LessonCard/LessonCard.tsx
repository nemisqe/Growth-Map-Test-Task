import { useToast } from "@components/Toast";
import { Ionicons } from "@expo/vector-icons";
import { Lesson, LessonStatus } from "@type/lesson";
import { useTheme } from "@utils/theme";
import { GlassView } from "expo-glass-effect";
import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { STATUS_ICONS } from "./LessonCard.consts";
import { createStyles } from "./LessonCard.styles";
import { getStatusColors } from "./LessonCard.utils";

export function LessonCard({title, status}: Lesson) {
  const { theme } = useTheme();
  const { showToast } = useToast();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const statusColors = useMemo(() => getStatusColors(status, theme), [status, theme]);

  const handlePress = () => {
    if (status === LessonStatus.LOCKED) {
      showToast({ type: 'error', message: 'This lesson is locked' });
    } else if (status === LessonStatus.ACTIVE) {
      console.log('Start lesson');
    } else {
      return;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <GlassView style={styles.glassView} glassEffectStyle="regular" tintColor={theme.colors.card.background}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColors.background }]}>
            <Ionicons 
              name={STATUS_ICONS[status].name} 
              size={14} 
              color={statusColors.text} 
            />
            <Text style={[styles.statusText, { color: statusColors.text }]}>
              {status}
            </Text>
          </View>
        </View>
      </GlassView>
    </TouchableOpacity>
  )
}