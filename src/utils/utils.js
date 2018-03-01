
export const formatDate = params => {
  let date = params;
  if (!date) return;
  if (date.constructor !== Date) {
    date = new Date(date)
  }

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
};

export const getAdmissionTabs = () => {
  return [
    { id: 1, name: 'Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ', value: 'specialities' },
    { id: 2, name: 'Приймальна комісія', value: 'selectionCommittee' },
    { id: 3, name: 'Правила прийому', value: 'admissionRules' },
    { id: 4, name: 'Порядок подання документів', value: 'documentsSubmission' },
    { id: 5, name: 'Робота зі школярами', value: 'schoolWork' },
    { id: 6, name: 'Робота з технікумами', value: 'colledgeWork' },
    { id: 7, name: 'Центр довузівської підготовки' },
    { id: 8, name: 'Заходи' },
    { id: 9, name: 'Для іноземних громадян' },
    { id: 10, name: 'Для майбутніх магістрів' },
    { id: 11, name: 'Друга вища освіта' }
  ];
};
