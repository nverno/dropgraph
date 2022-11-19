import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Container from './Container';
import '../styles/global.css';

export interface AppProps {}

const container = document.getElementById('root');
const root = createRoot(container);

const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(
        location.state,
      )}`,
    );
  }

  return children;
};

const App: FC<AppProps> = () => {
  return (
    <BrowserRouter basename='/dropgraph/'>
      <DebugRouter>
        <Container />
      </DebugRouter>
    </BrowserRouter>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  // set theme
  /* document.body.className = 'theme-bg theme-green'; */
});

root.render(<App />);
