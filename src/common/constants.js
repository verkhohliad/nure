import keyMirror from 'keymirror'

export const ROUTES = {
  MAIN: '/',
  SPECIALITIES: '/specialities',
  ADMISSION: '/admission',
  OLYMPIAD: '/olympiad',
  NEWS: '/news',
  EXAM_RESULTS: '/exam_results',
  CONTACTS: '/contacts',
  ADMIN: '/admin',
  LOADING: '/loading',
};

export const SCROLL_BAR_SETTINGS = {
  maxScrollbarLength: 60,
  wheelPropagation: true,
};

export const GOOGLE = {
  KEY: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
  POSITION_LINK: 'https://www.google.com.ua/maps/place/' +
  '%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0' +
  '%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+' +
  '%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D1%80%' +
  'D0%B0%D0%B4%D0%B8%D0%BE%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0' +
  '%B8%D0%BA%D0%B8/@50.0156365,36.2259817,16.75z/data=!4m5!3m4!1s0x0:0x6daed05394f03251' +
  '!8m2!3d50.0152877!4d36.2278514',
};

export const TYPES_OF_SPECIALIZATIONS = keyMirror({
  SECOND_EDUCATION_EXTRAMURAL: null,
  SECOND_EDUCATION_DAILY: null,
  MASTER_EXTRAMURAL: null,
  MASTER_DAILY: null,
  BACHELOR_EXTRAMURAL: null,
  BACHELOR_DAILY: null,
});
