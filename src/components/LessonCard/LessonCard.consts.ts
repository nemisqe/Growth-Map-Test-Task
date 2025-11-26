import { LessonStatus } from "@type/lesson";
import { LessonStatusIcon } from "./LessonCard.types";

export const STATUS_ICONS: Record<LessonStatus, LessonStatusIcon> = {
  [LessonStatus.DONE]: { name: 'checkmark-circle' },
  [LessonStatus.ACTIVE]: { name: 'play-circle' },
  [LessonStatus.LOCKED]: { name: 'lock-closed' },
};

