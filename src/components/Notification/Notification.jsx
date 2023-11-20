import css from './Notification.module.css';

export function Notification({ message }) {
  return (
    <div className={css.section}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
