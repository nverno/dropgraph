import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { MainPage } from './components';

export interface ContainerProps {}

const Container: FC<ContainerProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
};

export default Container;
