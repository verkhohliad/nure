import { facultiesMock } from '../utils/mocks';

export const getFaculties = async () => {
  // todo: this shit while mock
  return await new Promise((resolve, reject) => {
    setTimeout(facultiesMock, 1000);
  });
};

export const getFaculty = async id => {
  if (!id) {
    console.warn('id not found for get faculty');
  }
  // axiox.get()
};

export const createFaculty = async faculty => {
  // axios.post()
};

export const updateFaculty = async faculty => {
  if (!faculty.id) {
    console.warn('id of updated faculty not found');
  }
  // axios.put ()
};
