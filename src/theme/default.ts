/* disable object-shorthand rule for Webpack Define plugin */
/* eslint-disable object-shorthand */
import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  type TCustomColors = Record<string, string>;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypeBackground {
    customBackground: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CustomPalette {
    customPalette: TCustomColors;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TypeText {
    customText: string;
  }
}

type TPalettePath = string | string[];

type TGetColorFn = (path: TPalettePath, defaultColor?: string) => string;

type TGetBRadiusFn = (ratio: number) => number;

type TOpacityKeys =
  | 'hoverOpacity'
  | 'selectedOpacity'
  | 'disabledOpacity'
  | 'focusOpacity'
  | 'activatedOpacity';

type TGetActionColorFn = (
  baseColor: TPalettePath,
  action: TOpacityKeys
) => string;

declare module '@mui/material/styles' {
  interface Theme {
    getColor: TGetColorFn;
    getBRadius: TGetBRadiusFn;
    getActionColor: TGetActionColorFn;
  }

  interface ThemeOptions {
    getColor: TGetColorFn;
    getBRadius: TGetBRadiusFn;
    getActionColor: TGetActionColorFn;
  }
}

const customShadows = {
  customShadow: '0 0 0 0 rgba(0,0,0,1)', // #25
};

function splitPath(path: TPalettePath) {
  if (Array.isArray(path)) {
    return path;
  }

  return path.includes('.') ? path.split('.') : [path, 'main'];
}

const theme = createTheme({
  palette: {
    text: {
      customText: '#fff'
    },
    background: {
      customBackground: '#fff',
    },
    customPalette: {
      customPaletteColor: '#fff',
    },
  },
  getColor(path: TPalettePath, defaultColor?: string) {
    const parts: string[] = splitPath(path);
    const { length } = parts;
    let index = 0;
    let result: unknown = theme.palette;

    for (; typeof result === 'object' && index < length; ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result = result[parts[index++]] as unknown;
    }

    if (typeof result !== 'string') {
      if (defaultColor) {
        return defaultColor;
      }

      throw new Error(`There is no color "${path}" in the MUI palette.`);
    }

    return result;
  },
  getBRadius(ratio: number) {
    return (theme.shape.borderRadius as number) * ratio;
  },
  getActionColor(baseColor: TPalettePath, action: TOpacityKeys) {
    return alpha(theme.getColor(baseColor), theme.palette.action[action]);
  },
});

const kodoTheme = createTheme(theme, {
  components: {},
  shadows: [...theme.shadows, customShadows],
});

export default kodoTheme;
