import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <div className={classes.block}>{count}</div>
      <button onClick={onClickButton}></button>
    </div>
  );
};
