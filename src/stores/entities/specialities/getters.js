import { GETTERS } from '../../../common'

export default {
  [GETTERS.GET_SPECIALITIES]: (state, getters) => {
    const faculties = getters[GETTERS.GET_FACULTIES];
    return [...state.map(speciality => {
      const faculty = faculties.find(elem => elem.uid === speciality.faculty_uid);
      return {
        ...speciality,
        faculty_name: faculty ? faculty.name : '',
      }
    })]
  },
}
