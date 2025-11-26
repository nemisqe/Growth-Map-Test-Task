import { BaseScreen } from "@components/BaseScreen";
import { LessonCard } from "@components/LessonCard";
import { GROWTH_MAP } from "@constants/GROWTH_MAP";
import { Lesson } from "@type/lesson";
import { keyExtractor } from "@utils/keyExtractor";
import { useTheme } from "@utils/theme";
import { useCallback, useMemo } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { createStyles } from './Home.styles';

export function HomeScreen() {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  
  const renderItem: ListRenderItem<Lesson> = useCallback(({ item }: { item: Lesson }) => (
    <LessonCard {...item} />
  ), []);
  
  return (
    <BaseScreen headerProps={{ headerTitle: 'Home' }}>
      <FlatList contentContainerStyle={styles.list} data={GROWTH_MAP} renderItem={renderItem} keyExtractor={keyExtractor} />
    </BaseScreen>
  )
}