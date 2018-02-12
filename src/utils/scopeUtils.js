import { PAGES_NAMES, ROUTES } from '../common'

export const getUserPages = (isCurrentUserAdmin) => {
  const userPages = [{
    label: PAGES_NAMES.MAIN,
    value: 'MainPage',
    url: ROUTES.MAIN
  }, {
    label: PAGES_NAMES.SPECIALITIES,
    value: 'SpecialitiesPage',
    url: ROUTES.SPECIALITIES
  }, {
    label: PAGES_NAMES.ADMISSION,
    value: 'AdmissionPage',
    url: ROUTES.ADMISSION
  }, {
    label: PAGES_NAMES.OLYMPIAD,
    value: 'OlympiadPage',
    url: ROUTES.OLYMPIAD
  }, {
    label: PAGES_NAMES.NEWS,
    value: 'BlogPage',
    url: ROUTES.NEWS
  }, {
    label: PAGES_NAMES.EXAM_RESULTS,
    value: 'EmaxREsults',
    url: ROUTES.EXAM_RESULTS
  }, {
    label: PAGES_NAMES.CONTACTS,
    value: 'ContactPage',
    url: ROUTES.CONTACTS
  }];

  if (isCurrentUserAdmin) {
    userPages.push({
      label: PAGES_NAMES.ADMIN,
      value: 'AdminPage',
      url: ROUTES.ADMIN
    })
  }

  return userPages;
};
