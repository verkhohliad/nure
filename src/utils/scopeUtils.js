import {PAGES_NAMES, ROUTES} from '../common'
import TheMain from '../pages/main/TheMain'
import TheSpecialities from '../pages/specialities/TheSpecialities'
import TheAdmission from '../pages/admission/TheAdmission'
import TheOlympiad from '../pages/olympiad/TheOlympiad'
import TheNews from '../pages/news/TheNews'
import TheExamResults from '../pages/examResults/TheExamResults'
import TheContacts from '../pages/contacts/TheContacts'
import TheAdmin from '../pages/admin/TheAdmin'
import TheAnnouncement from '../pages/announcements/TheAnnouncement'

export const getUserPages = (isCurrentUserAdmin) => {
  const userPages = [{
    label: PAGES_NAMES.MAIN,
    component: TheMain,
    path: ROUTES.MAIN,
    disabled: false
  },
    {
      label: PAGES_NAMES.SPECIALITIES,
      component: TheSpecialities,
      path: ROUTES.SPECIALITIES,
      disabled: true
    }, {
      label: PAGES_NAMES.ADMISSION,
      component: TheAdmission,
      path: ROUTES.ADMISSION,
      disabled: true
    },
    {
      label: PAGES_NAMES.OLYMPIAD,
      component: TheOlympiad,
      path: ROUTES.OLYMPIAD,
      disabled: false
    }, {
      label: PAGES_NAMES.NEWS,
      component: TheNews,
      path: ROUTES.NEWS,
      disabled: false
    },
    //   {
    //   label: PAGES_NAMES.EXAM_RESULTS,
    //   component: TheExamResults,
    //   path: ROUTES.EXAM_RESULTS,
    // },

    {
      label: PAGES_NAMES.CONTACTS,
      component: TheContacts,
      path: ROUTES.CONTACTS,
      disabled: false
    },
    {
      label: PAGES_NAMES.ANNOUNCEMENTS,
      component: TheAnnouncement,
      path: ROUTES.ANNOUNCEMENTS,
      disabled: false
    }
    ];

  if (isCurrentUserAdmin) {
    userPages.push({
      label: PAGES_NAMES.ADMIN,
      component: TheAdmin,
      path: ROUTES.ADMIN,
    })
  }

  return userPages;
};
