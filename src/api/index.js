import axios from 'axios'

import { SERVER_CONFIG } from '../common'

export * from './announcements'
export * from './specialities'
export * from './faculties'
export * from './news'
export * from './specializations'
export * from './olympiadUsers'

export const initApi = () => {
  axios.defaults.baseURL = SERVER_CONFIG.HOST;
  axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
};
