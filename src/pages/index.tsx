import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../components';
import AppContextProvider from '../context';
import { routes } from '../services';

const Pages = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default Pages