export function isIncreaseingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return false;

  for (let number of numberList) {
    if (typeof number !== 'number') return false;
  }

  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] - numberList[i - 1] < 0) return false;
  }

  return true;
}
