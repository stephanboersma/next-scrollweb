export const formatDate = (date: string): string => {
  const d = new Date(date);
  return `${d.toLocaleString("da-DK")}`;
};
