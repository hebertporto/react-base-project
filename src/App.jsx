import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './components/Header';
import { ErrorBoundary } from './components/ErrorBoundary';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </>
    </BrowserRouter>
  );
};

export { App };
