import React from 'react';
import ReactDOM from "react-dom/client";
import { ThemeProvider } from '@emotion/react'

import App from './components/App/App';

const theme = {
  colors: {
    blue: "#46c3f2",
    violet: '#9966cc',
    red: "#c66461",
    green: '#6eb7cd'
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);
