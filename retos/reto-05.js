const diffDays = (date) => {
  const christmasDate = Date.parse('Dec 25, 2021');
  const compareDate = Date.parse(date);
  const dayInMilliseconds = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((compareDate - christmasDate) / dayInMilliseconds) * -1;
  return diffDays;
};


console.log(diffDays('Dec 23, 2021 23:59:59'))
