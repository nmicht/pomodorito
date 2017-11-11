import React from 'react';

const Counter = ({minutes, seconds}) => {
   return (
     <span>{minutes}:{seconds}</span>
   );
}

export default Counter;
