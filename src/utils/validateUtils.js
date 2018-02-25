export const getValidString = value => {
  return (value[0].toUpperCase() + value.slice(1)).trim();
};

export const getSelectedSubjects = items => {
  const resultItems = [];

  Object.keys(items).forEach(key => {
    if (items[key]) {
      resultItems.push(key);
    }
  });
  return resultItems;
};

export const validatePlaceOfStudy = value => {
  return (!!value && value.length >= 5);
};

export const validateUserName = value => {
  return (!!value && value.length >= 3);
};

export const validateEmail = email => {
  return (!!email && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
};

export const validatePhoneNumber = number => {
  return (!!number && /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(number));
};

