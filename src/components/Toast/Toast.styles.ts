import { Theme } from "@utils/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: theme.spacing.xl * 3,
    left: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 9999,
  },
  toast: {
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  glassView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.sm,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text.primary,
  },
});

