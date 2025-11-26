import { Theme } from "@utils/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface.primary,
    paddingHorizontal: theme.spacing.md,
  },
});