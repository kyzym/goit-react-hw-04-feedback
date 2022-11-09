import { Box } from './components/utils/Box.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  let { good, neutral, bad } = feedback;
  let total = 0;
  let positivePercentage = 1;

  const countTotalFeedback = () => {
    return (total = good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    if (!total) return positivePercentage;
    return (positivePercentage = parseInt((good / total) * 100));
  };

  const onFeedbackIncrement = btnType => {
    setFeedback(state => ({ ...state, [btnType]: state[btnType] + 1 }));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
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
