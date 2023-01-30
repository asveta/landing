import styles from './Groups.module.css';
import GroupItem from './GroupItem';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

const coursesObj = [
  {
    id: 1,
    subject: 'Математика',
    grade: 7,
    time_lesson: '19:30:00',
    amount_studens: 1,
    amount_places: 5,
    is_full: false,
    day_week: 'monday',
    teacher: 1,
  },
  {
    id: 2,
    subject: 'Математика',
    grade: 7,
    time_lesson: '19:30:00',
    amount_studens: 1,
    amount_places: 5,
    is_full: false,
    day_week: 'monday',
    teacher: 1,
  },
  {
    id: 3,
    subject: 'Математика',
    grade: 7,
    time_lesson: '19:30:00',
    amount_studens: 1,
    amount_places: 5,
    is_full: false,
    day_week: 'monday',
    teacher: 1,
  },
];
const Groups = ({ getFormRequest }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get(`http://new.asveta.by/course/`).then((res) => {
      console.log(res.data);
      setGroups(res.data);
    });
  }, []);

  return (
    <div className={styles.groups_container}>
      <div className='section-wrapper'>
        <div className={styles.groups_content}>
          <div className={styles.groups_header}>
            <h3>Доступные группы</h3>
          </div>
          <div className={styles.groups_content_items}>
            {groups
              ? groups.map((item) => {
                  return <GroupItem key={item.id} item={item} getFormRequest={getFormRequest} />;
                })
              : ''}
          </div>
          <div className={styles.groups_footer}>
            <Button variant='primary'>Смотреть полностью</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
