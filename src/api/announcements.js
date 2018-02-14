import { announcementsMock } from '../utils/mocks';

export const getAnnouncements = async () => {
  // todo: this shit while mock
  return await new Promise((resolve, reject) => {
    setTimeout(announcementsMock, 1000);
  });
};

export const getAnnouncement = async (id) => {
  // axiox.get()
};

export const createAnnouncement = async (announcement) => {
  // axios.post()
};

export const updateAnnouncement = async (announcement) => {
  if (!announcement.id) {
    console.warn('id of updated announcement not found');
  }
  // axios.put ()
};
