export const getNormalizeDate = (birthday) => {
  let normalize = new Date(birthday).toLocaleDateString("en-EN");
  let day = normalize.split("/");
  let currentYear = new Date().getFullYear();
  let birthdayDate = new Date(currentYear, day[0] - 1, day[1]);
  let now = new Date().valueOf();
  const sortDay = () => {
    if (birthdayDate.valueOf() < now) {
      return new Date(
        birthdayDate.setFullYear(currentYear + 1)
      ).toLocaleDateString("en-EN");
    }
    return new Date(birthdayDate.valueOf()).toLocaleDateString("en-EN");
  };
  return sortDay();
};
