export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) return true;
  }

  return false;
}
