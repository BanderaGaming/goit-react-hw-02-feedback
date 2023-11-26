import { Component } from 'react';
import css from './Feedback.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    let total = 0;
    const state = this.state;
    total = state.good + state.neutral + state.bad;
    return total;
  }

  handleIncrement = id => {
    this.setState(prevState => {
      return {
        [id]: prevState[id] + 1,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    const res = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    return (res > 0 ? res : 0) + ' %';
  };

  render() {
    const tstate = this.state;
    const feedbackOptions = Object.keys(this.state);
    return (
      <div className={css.box}>
        <Section
          title={`Please leave your feedback`}
          children={
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.handleIncrement}
            />
          }
        />
        <Section
          title={`Statistics`}
          children={
            this.countTotalFeedback() ? (
              <Statistics
                good={tstate.good}
                neutral={tstate.neutral}
                bad={tstate.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        />
      </div>
    );
  }
}
