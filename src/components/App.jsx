import { Component } from 'react';
import { Box } from './utils/Box.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = 0;
  positivePercentage = 0;

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (this.total = good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    if (!this.total) return this.positivePercentage;
    return (this.positivePercentage = parseInt((good / this.total) * 100));
  };

  onFeedbackIncrement = opt => {
    this.setState(prevState => ({ [opt]: prevState[opt] + 1 }));
  };

  render() {
    const {
      onFeedbackIncrement,
      state,
      countPositiveFeedbackPercentage,
      countTotalFeedback,
    } = this;
    const { good, neutral, bad } = state;

    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
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
  }
}
