export type ToastType = 'success' | 'error' | 'info';

export type ToastConfig = {
  type: ToastType;
  message: string;
  duration?: number;
};

