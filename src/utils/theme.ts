import { Appearance, useColorScheme } from "react-native";

type ThemeColors = {
  surface: {
    primary: string;
    secondary: string;
    accent: string;
  };
  card: {
    background: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
    onAccent: string;
    onPrimary: string;
  };
  input: {
    background: string;
    text: string;
    placeholder: string;
    border: string;
  };
  tips: {
    background: string;
    text: string;
    border: string;
  };
  state: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  badge: {
    success: string;
    info: string;
    locked: string;
  };
  colors: {
    yellow: string;
    blue: string;
    green: string;
    red: string;
    purple: string;
    orange: string;
    pink: string;
    lightRed: string;
    white: string;
    black: string;
  };
}

export type Theme = {
  colors: ThemeColors;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
}

export const tokens: Theme = {
  colors: {
    surface: {
      primary: "#F5F7FA",
      secondary: "#E8ECF2",
      accent: "#4A72FF",
    },
    card: {
      background: "#FFFFFF",
    },
    text: {
      primary: "#1A2138",
      secondary: "#4E5D78",
      accent: "#4A72FF",
      onAccent: "#FFFFFF",
      onPrimary: "#FFFFFF",
    },
    input: {
      background: "#FFFFFF",
      text: "#1A2138",
      placeholder: "#8A94A6",
      border: "#E6E8EC",
    },
    tips: {
      background: "#F0F9FF",
      text: "#0369A1",
      border: "#0EA5E9",
    },
    state: {
      success: "#00C48C",
      warning: "#FFB800",
      error: "#FF647C",
      info: "#4A72FF",
    },
    badge: {
      success: "#00C48C",
      info: "#4A72FF",
      locked: "#6B7280",
    },
    colors: {
      yellow: "#FFD700",
      blue: "#00BFFF",
      green: "#00FF00",
      red: "#FF0000",
      purple: "#800080",
      orange: "#FFA500",
      pink: "#FFC0CB",
      lightRed: "#FF647C",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
  },
};

export const darkTokens: Theme = {
  ...tokens,
  colors: {
    surface: {
      primary: "#0F1419",
      secondary: "#1A2138",
      accent: "#4A72FF",
    },
    card: {
      background: "#242B42",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B4BCD0",
      accent: "#4A72FF",
      onAccent: "#FFFFFF",
      onPrimary: "#1A2138",
    },
    input: {
      background: "#131726",
      text: "#FFFFFF",
      placeholder: "#8A94A6",
      border: "#2F3850",
    },
    tips: {
      background: "#0C4A6E",
      text: "#7DD3FC",
      border: "#0EA5E9",
    },
    state: tokens.colors.state,
    badge: {
      success: "#00C48C",
      info: "#4A72FF",
      locked: "#6B7280",
    },
    colors: {
      yellow: "#FFD700",
      blue: "#00BFFF",
      green: "#00FF00",
      red: "#FF0000",
      purple: "#800080",
      orange: "#FFA500",
      pink: "#FFC0CB",
      white: "#FFFFFF",
      lightRed: "#FF647C",
      black: "#000000",
    },
  },
  spacing: tokens.spacing,
  borderRadius: tokens.borderRadius,
};

export const getThemeTokens = (isDark: boolean): Theme => (isDark ? darkTokens : tokens);

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const toggleTheme = () => {
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    Appearance.setColorScheme(newColorScheme);
  }

  return {
    theme: getThemeTokens(isDarkMode),
    isDarkMode,
    toggleTheme,
  };
};
