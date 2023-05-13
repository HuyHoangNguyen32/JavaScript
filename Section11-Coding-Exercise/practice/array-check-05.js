export function hasFalsy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === false) return true;
  }

  return false;
}
