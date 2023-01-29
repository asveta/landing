import styles from './GroupItem.module.css';
import Button from 'react-bootstrap/Button';
import SendRequestAddGroup from '../SendRequestAddGroup';

const GroupItem = ({ item, addRequest, getFormRequest }) => {
  return (
    <div className={styles.group_item}>
      <div className={styles.group_item__header}>
        <h3>{item.subject}</h3>
      </div>
      <div className={styles.group_item__main}>
        <p className={styles.group_item__main__day}>{item.day_week}</p>
        <div className={styles.separator}></div>
        <p className={styles.group_item__main__time}>{item.time_lesson.slice(0, -3)}</p>
        <div className={styles.separator}></div>
        <p className={styles.group_item__main__form}>{item.grade} класс</p>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.group_item__footer}>
        <SendRequestAddGroup className={styles.btnSend} action={getFormRequest} />
      </div>
    </div>
  );
};

export default GroupItem;
