import { Platform } from 'react-native';

const primaryColor = '#874d91'; // lila

export const theme = {
  colors: {
    textPrimary: '#24292e', // black
    textSecondary: '#586069', // gray
    primary: primaryColor,
    inverse: 'white',
    error: '#B00020', // red
    border: 'lightgray',
  },
  backgroundColors: {
    white: 'white',
    night: 'black',
    main: '#e1e5e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    appbar: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export const shadowing = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
};

export default theme;
