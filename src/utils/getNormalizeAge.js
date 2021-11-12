export const declination = (age) => {
  const num = age % 10;
  if (num === 1) return "год";
  if (
    age === 5 ||
    age === 6 ||
    age === 7 ||
    age === 8 ||
    age === 9 ||
    age === 10 ||
    age === 11 ||
    age === 12 ||
    age === 13 ||
    age === 14 ||
    age === 15 ||
    age === 16 ||
    age === 17 ||
    age === 18 ||
    age === 19 ||
    age === 20
  )
    return "лет";
  if (num === 2 || num === 3 || num === 4) return "года";
  if (
    num === 0 ||
    num === 5 ||
    num === 6 ||
    num === 7 ||
    num === 8 ||
    num === 9
  )
    return "лет";
};
