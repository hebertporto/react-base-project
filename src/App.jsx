import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes />
      </>
    </BrowserRouter>
  );
};

export { App };
