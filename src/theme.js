const primaryColor = '#874d91'; // lila

export const theme = {
  colors: {
    textPrimary: '#24292e', // black
    textSecondary: '#586069', // gray
    primary: primaryColor,
    inverse: 'white',
    error: '#B00020', // red
  },
  backgroundColors: {
    notselected: 'white',
    selected: 'lightgray',
    night: 'black',
    main: '#e1e5e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    appbar: 25,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  buttonStyle: {
    backgroundColor: primaryColor,
    padding: 10,
    textAlign: 'center',
    borderRadius: 7,
    borderWidth: 3,
    borderColor: primaryColor,
    overflow: 'hidden', // otherwise the borderRadius doesnt apply for the bg color
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