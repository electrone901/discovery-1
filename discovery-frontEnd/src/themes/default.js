import tinycolor from 'tinycolor2';

const primary = '#A0E7E5';
const secondary = '#3CD4A0';
const warning = '#FEB900';
const error = '#F37970';
const success = '#3CD4A0';
const action = '#D87EE3';

const lightenRate = 7.5;
const darkenRate = 15;

export const theme = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString()
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: '#FFFFFF'
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString()
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString()
    },
    error: {
      main: error,
      light: tinycolor(error)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(error)
        .darken(darkenRate)
        .toHexString()
    },
    action: {
      main: action,
      light: tinycolor(action)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(action)
        .darken(darkenRate)
        .toHexString()
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#6E6E6E',
      hint: '#B9B9B9'
    },
    background: {
      default: '#A0E7E5',
      light: '#B4F8C8'
    }
  },
  customShadows: {
    widget:
      '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetDark:
      '0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetWide:
      '0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: '#4A4A4A1A'
      }
    },
    MuiMenu: {
      paper: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
      }
    },
    MuiSelect: {
      icon: {
        color: '#B9B9B9'
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: 'white'
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(224, 224, 224, .5)'
      },
      head: {
        fontSize: '0.95rem'
      },
      body: {
        fontSize: '0.95rem'
      }
    },
    MuiFormControl: {
      marginNormal: {
        marginBottom: '3px'
      }
    }
  }
};
