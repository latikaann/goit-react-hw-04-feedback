import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul className={css.statisticksList}>
      <li className={css.statisticksItem}>
        <p>Good:</p>
        <span>{good}</span>
      </li>
      <li className={css.statisticksItem}>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </li>
      <li className={css.statisticksItem}>
        <p>Bad:</p>
        <span>{bad}</span>
      </li>
    </ul>
    <div>
      <p className={css.feedbackTotal}>
        Total: <span>{total}</span>
      </p>
      <p className={css.feedbackPercentage}>
        Positive feedback:
        <span> {positivePercentage}</span>%
      </p>
    </div>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
