import { specialitiesMock } from '../utils/mocks';

export const getSpecialities = async () => {
  // todo: this shit while mock
  return await new Promise((resolve, reject) => {
    setTimeout(specialitiesMock, 1000);
  });
};

export const getSpeciality = async id => {
  if (!id) {
    console.warn('id not found for get speciality');
  }
  // axiox.get()
};

export const createSpeciality = async speciality => {
  // axios.post()
};

export const updateSpeciality = async speciality => {
  if (!speciality.id) {
    console.warn('id of updated speciality not found');
  }
  // axios.put ()
};
