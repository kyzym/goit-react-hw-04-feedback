import React from 'react';
import { PropTypes } from 'prop-types';
import { Message } from './Notification.styled';
import { BsEmojiWink } from 'react-icons/bs';

export const Notification = ({ message }) => (
  <Message>
    {message}
    <BsEmojiWink />
  </Message>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
