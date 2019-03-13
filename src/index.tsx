import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'ui/components/App';
import worker from 'ui/assets/worker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from 'ui/util/Theme';


import 'src/ui/styles/css/index.css';

const theme = Theme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
worker();
