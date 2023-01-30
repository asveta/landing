import styles from './Blog.module.css';
import BlogItem from './BlogItem';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`http://new.asveta.by/blog/`).then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className={styles.blog_container}>
      <div className='section-wrapper'>
        <div className={styles.blog_content}>
          <div className={styles.blog_header}>
            <h3>Блог</h3>
          </div>
          <div className={styles.blog_content_items}>
            {blogs
              ? blogs.map((item) => {
                  return <BlogItem key={item.id} item={item} />;
                })
              : ''}
          </div>
          <div className={styles.blog_footer}>
            <Button variant='primary'>Перейти в блог</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
