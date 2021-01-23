import axios from 'axios'
import store from '@/store'

let token = store.state.token

axios.defaults.baseURL = 'http://localhost:8081/api/'
axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
export default axios;

