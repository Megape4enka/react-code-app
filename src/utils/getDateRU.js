export const normalizeDate = (date) => {
  let refactorDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return refactorDate.split(" ").slice(0, -1).join(" ");
};
