import { Theme } from "@utils/theme";
import { ToastType } from "./Toast.types";

export const getToastColor = (type: ToastType, theme: Theme): string => {
  switch (type) {
    case 'success':
      return theme.colors.state.success;
    case 'error':
      return theme.colors.state.error;
    case 'info':
      return theme.colors.state.info;
  }
};

