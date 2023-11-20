import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.statsBox}>
      <li>
        <p>
          Good:
          <span> {good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:
          <span> {neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:
          <span> {bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total:
          <span> {total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive Feedback:
          <span> {positivePercentage}</span>
        </p>
      </li>
    </ul>
  );
}
