import axios from 'axios';

export const getCourses = () => {
  axios.get(`http://new.asveta.by/blog/`).then((res) => {
    console.log(res.data);
    return res.data;
  });
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // fetch('http://new.asveta.by/blog/?format=json')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
};
