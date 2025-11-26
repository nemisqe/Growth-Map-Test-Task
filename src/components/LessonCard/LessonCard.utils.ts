import { LessonStatus } from "@type/lesson";
import { Theme } from "@utils/theme";

export const getStatusColors = (status: LessonStatus, theme: Theme) => {
  switch (status) {
    case LessonStatus.DONE:
      return {
        background: theme.colors.badge.success,
        text: theme.colors.text.onAccent,
      };
    case LessonStatus.ACTIVE:
      return {
        background: theme.colors.badge.info,
        text: theme.colors.text.onAccent,
      };
    case LessonStatus.LOCKED:
      return {
        background: theme.colors.badge.locked,
        text: theme.colors.text.onAccent,
      };
  }
};