import axios from "axios";

// const instance = axios.create({
//   baseURL: ' http://localhost:5001/clone-72413/us-central1/api'
// });

const instance = axios.create({
  baseURL: 'https://us-central1-clone-72413.cloudfunctions.net/api'
});



export default instance;