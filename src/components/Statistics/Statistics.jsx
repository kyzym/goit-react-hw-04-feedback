import React from 'react';
import { PropTypes } from 'prop-types';
import { List, StatListItem } from './Statistics.styled';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <List>
    <StatListItem>
      <p>Good: {good}</p>
    </StatListItem>
    <StatListItem>
      <p>Neutral: {neutral}</p>
    </StatListItem>
    <StatListItem>
      <p>Bad: {bad}</p>
    </StatListItem>
    <StatListItem>
      <p>Total: {total}</p>
    </StatListItem>
    <StatListItem>
      <p>
        Positive feedback:
        {positivePercentage > 70 ? (
          <>
            {positivePercentage} % <BsEmojiSmile />{' '}
          </>
        ) : positivePercentage > 40 ? (
          <>
            {positivePercentage} % <BsEmojiNeutral />{' '}
          </>
        ) : (
          <>
            {positivePercentage} % <BsEmojiFrown />{' '}
          </>
        )}
      </p>
    </StatListItem>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
