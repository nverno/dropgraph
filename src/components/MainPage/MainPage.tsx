import React, { FC } from 'react';
import { GraphContainer, DataInput } from '..';

export interface MainPageProps {}

export const MainPage: FC<MainPageProps> = () => {
  return (
    <div>
      <DataInput />
      <GraphContainer />
    </div>
  );
};

export default MainPage;
