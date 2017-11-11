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

  /**
   * [handleStartClick description]
   * @return {[type]} [description]
   */
  handleStartClick = () => {
     const intervalId = setInterval( this.timer, 1000);
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
             // Debemos cambiar al nuevo break y aumentar el contador de breaks
         }
         return {
           currentDuration: moment.duration(seconds - 1, 'seconds')
         };
     });
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

export default Pomodoro;
