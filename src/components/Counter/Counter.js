import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Counter = ({time}) => {
   return (
     <span>{moment(time).format('mm:ss')}</span>
   );
}

Counter.propTypes = {
  time: PropTypes.number.isRequired,
};

export default Counter;
