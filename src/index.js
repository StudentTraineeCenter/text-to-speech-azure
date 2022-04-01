// DONE: process.env
// TODO: push code to github
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);