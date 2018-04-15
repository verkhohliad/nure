import AdmissionRules from '../pages/admission/AdmissionRules';
import AdmissionSelectionCommittee from '../pages/admission/AdmissionSelectionCommittee';
import AdmissionSpecialities from '../pages/admission/AdmissionSpecialties';
import AdmissionDocumentsSubmission from '../pages/admission/AdmissionDocumentsSubmission';
import AdmissionSchoolWork from '../pages/admission/AdmissionSchoolWork';
import AdmissionColledgeWork from '../pages/admission/AdmissionColledgeWork';

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
    { id: 1,
      name: 'Спеціальності, за якими проводиться прийом на 1 курс до ХНУРЕ',
      value: AdmissionSpecialities.name },
    { id: 2, name: 'Приймальна комісія', value: AdmissionSelectionCommittee.name },
    { id: 3, name: 'Правила прийому', value: AdmissionRules.name },
    { id: 4, name: 'Порядок подання документів', value: AdmissionDocumentsSubmission.name },
    { id: 5, name: 'Робота зі школярами', value: AdmissionSchoolWork.name },
    { id: 6, name: 'Робота з технікумами', value: AdmissionColledgeWork.name },
    { id: 7, name: 'Центр довузівської підготовки' },
    { id: 8, name: 'Для іноземних громадян' },
    { id: 9, name: 'Для майбутніх магістрів' },
    { id: 10, name: 'Друга вища освіта' },
  ];
};
