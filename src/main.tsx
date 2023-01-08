import React from 'react';
import { createRoot } from 'react-dom/client';
import { IconLoading, IconAddBold } from './react-icon';
const App = () => {
  return (
    <div>
      <IconAddBold></IconAddBold>
      <IconLoading></IconLoading>
    </div>
  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
