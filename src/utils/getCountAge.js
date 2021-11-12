export const userAge = (age) => {
  let dateNow = new Date();
  let userBirthday = new Date(age);

  let t = userBirthday.getTime() / 86400000 / 365;
  let dateNowMills = dateNow.getTime() / 86400000 / 365;
  return Math.abs(Math.round(t - dateNowMills));
};
