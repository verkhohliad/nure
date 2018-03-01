import axios from 'axios'
import to from 'await-to-js'

export const registerOlympiadUser = async params => {
  const [err, result] = await to(axios.post('/api/olympiad_users/register', params));
  if (err) {
    console.error(err);
    return err;
  }
  return result;
};

export const getOlympiadUsers = async () => {
  const [err, result] = await to(axios.get('/api/olympiad_users'));
  if (err) console.error(err);
  return result;
};
