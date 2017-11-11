import React from 'react';
import moment from 'moment';
import Counter from '../Counter';

/**
 * [state description]
 * @type {Object}
 */
class Pomodoro extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        intervalId: null, //ID for the interval to update the time
        breaksCount: 0, //Count for each "time break"
        currentBreak: 'pomodoro', //Type of current "time break"
        currentDuration: this.setDuration(props.pomodoro),
      }
  }

  /**
   * [setDuration description]
   * @param {[type]} minutes [description]
   */
  setDuration(minutes) {
    return moment.duration(minutes * 60, 'seconds');
  }

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
