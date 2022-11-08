import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, List, ListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <List>
    {options.map(option => (
      <ListItem key={option}>
        <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
      </ListItem>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
