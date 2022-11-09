import { Box } from './components/utils/Box.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  let total = 0;
  let positivePercentage = 1;

  const countTotalFeedback = () => {
    return (total = good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    if (!total) return positivePercentage;
    return (positivePercentage = parseInt((good / total) * 100));
  };

  const onFeedbackIncrement = buttonName => {
    switch (buttonName) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        throw new Error('Something went wrong');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onFeedbackIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={`There is no feedback`}></Notification>
        )}
      </Section>
    </Box>
  );
};
