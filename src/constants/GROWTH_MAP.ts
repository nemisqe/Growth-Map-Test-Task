import { Lesson, LessonStatus } from "@type/lesson";

export const GROWTH_MAP: readonly Lesson[] = [
  { id: 1, title: "Welcome Journey", status: LessonStatus.DONE },
  { id: 2, title: "Переключение на себя", status: LessonStatus.ACTIVE },
  { id: 3, title: "Источник вдохновения", status: LessonStatus.LOCKED },
  { id: 4, title: "Пространство идей", status: LessonStatus.LOCKED },
  { id: 5, title: "Финальный тест", status: LessonStatus.LOCKED }
];