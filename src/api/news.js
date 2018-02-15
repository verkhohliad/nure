import { newsMock } from '../utils/mocks';

export const getAllNews = async () => {
  // todo: this shit while mock
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newsMock())
    }, 1000);
  });
};

export const getNews = async id => {
  if (!id) {
    console.warn('id not found for get news');
  }
  // axiox.get()
};

export const createNews = async news => {
  // axios.post()
};

export const updateNews = async news => {
  if (!news.id) {
    console.warn('id of updated news not found');
  }
  // axios.put ()
};
