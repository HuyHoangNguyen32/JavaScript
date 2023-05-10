export function countEmails(str) {
  if (str === '') return undefined;

  const emails = str.split(' ').filter((x) => x.includes('@') === true);

  const result = [];

  for (const email of emails) {
    if (
      email.split('@')[0].length >= 3 &&
      email.split('@')[1].length >= 3
    )
      result.push(email);
  }

  const result2 = [];


  for (const email of result) {
    if (
      email.split('@')[1].includes('.com') ||
      email.split('@')[1].includes('.com.vn') ||
      email.split('@')[1].includes('.vn')
    )
      result2.push(email);
  }

  return result2.length;
}

console.log(
  countEmails('my email a@super.com should be')
);

console.log(
  countEmails('my email a@super.com should be abc@super.com and @ bla .com hoang@gmail.xyz')
);

console.log(
  countEmails(
    'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn he@edu.vn easy@frontend.xyz'
  )
);
