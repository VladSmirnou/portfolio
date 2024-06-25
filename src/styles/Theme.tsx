export const theme = (() => {
  const brand = '#FDC435';
  return {
    colors: {
      primaryBg: '#F9FAFF',
      secondaryBg: '#FFFFFF',
      brand,
      formFieldBorder: '#E8ECF4',

      font: {
        major: '#25282B',
        medium: '#333333',
        minor: '#828282',
        mainHeading: brand,
      }
    },

    media: {
      tablet: 'screen and (max-width: 768px)',
      mobile: 'screen and (max-width: 576px)',
      lessThanMin: 'screen and (max-width: 374px)'
    }
  }
})();
