import React from 'react';

const Counter = (props) => {
   return (
     <span>{props.minutes}:{props.seconds}</span>
   );
}

export default Counter;
