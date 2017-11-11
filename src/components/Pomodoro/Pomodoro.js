import React from 'react';
import Counter from '../Counter';

const Pomodoro = () => {
   return (
     <div>
         <Counter minutes={10} seconds={15} />
         //...botones…
     </div>
   );
}

export default Pomodoro;
