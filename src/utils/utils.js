
export const formatDate = params => {
  let date = params;
  if (!date) return;
  if (date.constructor !== Date) {
    date = new Date(date)
  }

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
};
