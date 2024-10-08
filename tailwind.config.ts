import { theme_colors, themes } from "@radroots/theme";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import tailwind_default from "tailwindcss/defaultTheme";
const { fontFamily: tw_font } = tailwind_default;

const heights_form = {};

const heights = {};

const widths = {};

const dimensions = {};

const config: Config = {
  content: [
    `src/**/*.{ts,svelte}`,
    `../../packages/svelte-lib/src/**/*.{ts,svelte}`,
  ],
  theme: {
    extend: {
      colors: {
        ...theme_colors,
      },
      fontFamily: {
        sans: ['SF Pro Display', ...tw_font.sans],
        serif: [...tw_font.serif],
        mono: [...tw_font.mono],
        apercu: ['Apercu Mono Pro'],
        magda: [`Magda Text`],
        lust: [`Lust`],
      },
      height: {
        ...heights,
        ...dimensions,
        ...Object.fromEntries(Object.entries(heights_form).map(([k, v]) => [`form_${k}`, v])),
      },
      width: {
        ...widths,
        ...dimensions,
      },
      minHeight: {
        ...heights
      },
      minWidth: {
        ...widths
      },
      maxHeight: {
        ...heights
      },
      maxWidth: {
        ...widths
      },
      padding: {
        ...Object.fromEntries(Object.entries(heights).map(([k, v]) => [`h_${k}`, v])),
        ...Object.fromEntries(Object.entries(widths).map(([k, v]) => [`w_${k}`, v])),
        ...Object.fromEntries(Object.entries(dimensions).map(([k, v]) => [`dim_${k}`, v])),
      },
      translate: {
        ...Object.fromEntries(Object.entries(heights).map(([k, v]) => [`h_${k}`, v])),
        ...Object.fromEntries(Object.entries(widths).map(([k, v]) => [`w_${k}`, v])),
      },
      spacing: {
        ...Object.fromEntries(Object.entries(dimensions).map(([k, v]) => [`dim_${k}`, v])),
      },
      borderWidth: {},
      borderRadius: {},
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      themes.theme_earth_light,
      themes.theme_earth_dark,
      themes.theme_os_dark,
      themes.theme_os_light,
    ],
  },
};

export default config;
