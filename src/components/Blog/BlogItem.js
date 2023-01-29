import styles from './BlogItem.module.css';
import imgDefault from '../../assets/logo_white.png';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import axios from 'axios';
import { getCourses } from '../../api/api';

const BlogItem = ({ item }) => {
  return (
    <div className={styles.blog_item__container}>
      <div className={styles.blog_item}>
        <div className={styles.blog_img}>
          <img src={item.photo ? item.photo : imgDefault} alt='img' />
        </div>
        <div className={styles.blog_item_content}>
          <div className={styles.blog_item__header}>{item.title}</div>
          <div className={styles.blog_item__main}>
            <p>{item.content}</p>
            <Button variant='primary'>Читать полностью</Button>
          </div>
          <div className={styles.blog_item__footer}>
            <Button variant='warning'>образование</Button>
            <Button variant='warning'>экзамены</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
