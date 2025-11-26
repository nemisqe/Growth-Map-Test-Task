export enum LessonStatus {
  DONE = 'done',
  ACTIVE = 'active',
  LOCKED = 'locked',
}

export type Lesson = {
  id: number;
  title: string;
  status: LessonStatus;
}