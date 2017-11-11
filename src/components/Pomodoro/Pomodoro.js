import React from 'react';
import Counter from '../Counter';

class Pomodoro extends React.Component {
  render() {
    return (
      <div>
          <Counter time={15000} />
          { /*botones*/ }
      </div>
    );
  }
}

export default Pomodoro;
