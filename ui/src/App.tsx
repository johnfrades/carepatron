import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import DataProvider from "./store/DataProvider";
import Clients from "./pages/Clients";
import { ThemeProvider } from '@mui/material';
import theme from './theme';

export default function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <DataProvider>
            <Routes>
              <Route path="/" element={<Clients />} />
              <Route path="/Clients" element={<Clients />} />
            </Routes>
          </DataProvider>
        </ThemeProvider>
    </div>
  );
}
