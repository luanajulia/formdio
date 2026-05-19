import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useState } from 'react'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import './App.css'
import Home from './pages/home/home'
import Cadastro from './pages/cadastro/cadastro'
import Login from './pages/login/login'
import UserHome from './pages/userhome/UserHome'

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/userhome" element={<UserHome />} />
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
