import React, { useState } from 'react';
import styles from './main-style.module.scss';

export interface Props {

}

const Main: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles['main-container']}>
      <h1>Main is here</h1>
    </div>
  );
};

export default Main;