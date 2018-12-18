import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-d7fa0.firebaseio.com/'
});

export default apiFirebase;