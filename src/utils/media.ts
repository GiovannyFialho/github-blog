import { defaultTheme } from "@/styles/theme/default";

export const media = {
  mobile: `(max-width: ${defaultTheme.breakpoints.mobile})`,
  tablet: `(max-width: ${defaultTheme.breakpoints.tablet})`,
  laptop: `(max-width: ${defaultTheme.breakpoints.laptop})`,
  desktop: `(max-width: ${defaultTheme.breakpoints.desktop})`,
};
