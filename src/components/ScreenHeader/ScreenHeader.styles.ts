import { Theme } from "@utils/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface.primary,
    paddingBottom: theme.spacing.sm,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    textAlign: 'center',
  }
});