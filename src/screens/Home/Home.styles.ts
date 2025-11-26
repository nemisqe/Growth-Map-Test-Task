import { Theme } from "@utils/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => StyleSheet.create({
  list: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
});