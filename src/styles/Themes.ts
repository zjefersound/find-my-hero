export const themes = {
  main: {
    //colors
    'primary': '#ec3124',
    'primary-dark': '#d4271b',
    'secondary': '#193146',
    'secondary-dark': '#1d1f29',

    //gray
    'neutral-100': '#FFFFFF',
    'neutral-200': '#F6F6F6',
    'neutral-300': '#F0F0F0',
    'neutral-400': '#E9E9E9',
    'neutral-500': '#D0D0D0',
    'neutral-600': '#C0C0C0',
    'neutral-700': '#B0B0B0',
    'neutral-800': '#888888',
    'neutral-900': '#6606060',
    'neutral-1000': '#383430',

    'text-in-primary': '#FFFFFF',

    //informative
    'alert': '#AA9304',
    'danger': '#FF6868',
    'success': '#51BD69',

    //shadow
    'shadow': '#0003',

    //shimmer
    'shimmer-1': '#FFFFFF',
    'shimmer-2': '#EAEAEA',
    'shimmer-3': '#F9F9F9',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.main;