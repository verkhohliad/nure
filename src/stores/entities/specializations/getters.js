import { GETTERS, TYPES_OF_SPECIALIZATIONS } from '../../../common'

export default {
  [GETTERS.GET_SPECIALIZATIONS]: (state, getters) => {
    const specialities = getters[GETTERS.GET_SPECIALITIES];
    return [...state.map(specialization => {
      const speciality = specialities.find(elem => elem.uid === specialization.speciality_uid);
      return {
        ...specialization,
        speciality_name: speciality ? speciality.name : '',
        faculty_name: speciality ? speciality.faculty_name : '',
      }
    })];
  },
  [GETTERS.GET_BACHELOR_DAILY_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.BACHELOR_DAILY
    })
  },
  [GETTERS.GET_BACHELOR_EXTRAMURAL_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.BACHELOR_EXTRAMURAL
    })
  },
  [GETTERS.GET_MASTER_DAILY_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.MASTER_DAILY
    })
  },
  [GETTERS.GET_MASTER_EXTRAMURAL_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.MASTER_EXTRAMURAL
    })
  },
  [GETTERS.GET_SECOND_EDUCATION_DAILY_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.SECOND_EDUCATION_DAILY
    })
  },
  [GETTERS.GET_SECOND_EDUCATION_EXTRAMURAL_SPECIALIZATIONS]: (state, getters) => {
    return getters[GETTERS.GET_SPECIALIZATIONS].filter(specialization => {
      return specialization.type_of_specialization === TYPES_OF_SPECIALIZATIONS.SECOND_EDUCATION_EXTRAMURAL
    })
  },
}
