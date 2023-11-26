import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnField}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              id={option}
              className={css.btn}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
