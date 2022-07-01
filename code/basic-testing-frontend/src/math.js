export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; // plus sign added to convert to number
  }
  return sum;
}
