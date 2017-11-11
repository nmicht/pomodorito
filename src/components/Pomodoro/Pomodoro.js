import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Counter from '../Counter';

const MAX_BREAKS = 3;

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

  /**
   * [handleStartClick description]
   * @return {[type]} [description]
   */
  handleStartClick = () => {
     const intervalId = setInterval( this.timer, 10);
     this.setState({ intervalId });
  }

  /**
   * [timer description]
   * @return {[type]} [description]
   */
   timer = () => {
     this.setState((state) => {
         const seconds = state.currentDuration.asSeconds();
         if (seconds <= 1) {
             clearInterval(state.intervalId);
             return this.finishTime();
         }
         return {
           currentDuration: moment.duration(seconds - 1, 'seconds')
         };
     });
   }

   getNextTime = () => {
     if (this.state.currentBreak === 'pomodoro') {
         if (this.state.breaksCount === MAX_BREAKS) {
           return 'longBreak';
         }

         return 'shortBreak';
     }

     return 'pomodoro';
   }

   finishTime = () => {
     let breaksCount = this.state.breaksCount;

     if (this.state.currentBreak === 'shortBreak') {
       breaksCount += 1;
     } else if (breaksCount === MAX_BREAKS) {
       breaksCount = 0;
     }

     const nextTime = this.getNextTime();

     this.props.onTimerFinish(this.state.currentBreak);

     return {
         currentBreak: nextTime,
         currentDuration: this.setDuration(this.props[nextTime]),
         breaksCount,
     };
   }


  render() {
    return (
      <div>
          <Counter time={this.state.currentDuration.asMilliseconds()} />
          <div>
            <button onClick={this.handleStartClick}>
              Start
            </button>
            <button>
              Reset
            </button>
          </div>
      </div>
    );
  }
}

Pomodoro.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  onTimerFinish: PropTypes.func,
};

export default Pomodoro;
