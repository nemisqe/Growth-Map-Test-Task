import { ToastType } from "./Toast.types";

type ToastIcon = {
  name: 'checkmark-circle' | 'close-circle' | 'information-circle';
}

export const TOAST_ICONS: Record<ToastType, ToastIcon> = {
  success: { name: 'checkmark-circle' },
  error: { name: 'close-circle' },
  info: { name: 'information-circle' },
};

export const TOAST_DURATION = 3000;

