import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const styles = {
  fontSize: "42px",
  backgroundColor: "rgb(225, 225, 225)",
  padding: "35px",
  display: "inline-block",
  margin: "40px",
}

const Counter = ({time}) => {
   return (
     <span style={styles}>{moment(time).format('mm:ss')}</span>
   );
}

Counter.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Counter;
