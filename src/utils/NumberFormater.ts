export const formatNumber = (number: string) => {
  return (
    '$' +
    Number(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  );
};
