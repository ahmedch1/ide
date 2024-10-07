import React from "react";
import App from './App.jsx'
import {ChakraProvider} from "@chakra-ui/react";
import REACTDOM from "react-dom/client";
import theme from "./theme.js";


REACTDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
    <App />

      </ChakraProvider>
  </React.StrictMode>,
)