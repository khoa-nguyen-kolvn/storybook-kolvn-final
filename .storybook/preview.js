const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '800px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '800px',
      height: '1280px'
    }
  }
};

export const parameters = {
  viewport: { viewports, defaultViewport: 'tablet' },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
