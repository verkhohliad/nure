import { specializationsMock } from '../utils/mocks';

export const getSpecializations = async () => {
  // todo: this shit while mock
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(specializationsMock())
    }, 1000);
  });
};

export const getSpecialization = async id => {
  if (!id) {
    console.warn('id not found for get specialization');
  }
  // axiox.get()
};

export const createSpecialization = async specialization => {
  // axios.post()
};

export const updateSpecialization = async specialization => {
  if (!specialization.id) {
    console.warn('id of updated specialization not found');
  }
  // axios.put ()
};
