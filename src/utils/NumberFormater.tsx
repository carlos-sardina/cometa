export const FormatNumber = (number: string | null) => {
  return '$' + Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}