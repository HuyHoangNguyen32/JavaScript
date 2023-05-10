export function getDisplayedAddress(address) {
  if (Object.values(address).length === 0) return '';

  const arrayAddress = [];

  for (let key in address) {
    arrayAddress.push(address[key]);
  }

  if (typeof arrayAddress[0] === 'number') {
    const [firstValue, secondValue] = arrayAddress;
    const newValue = `${firstValue} ${secondValue}`;

    arrayAddress.splice(0, 2, newValue);
  }

  return arrayAddress.join(', ');
}

const address1 = {
  number: 123,
  street: 'Nguyen Cong Tru',
  ward: 'Ward 11',
  district: 'Binh Thanh District',
  city: 'HCMC',
};

const address2 = {
  street: 'Nguyen Cong Tru',
  district: 'Binh Thanh District',
};

const address3 = {
  ward: 'Ward 11',
  district: 'Binh Thanh District',
  city: 'HCMC',
};

console.log(getDisplayedAddress(address1));
console.log(getDisplayedAddress(address2));
console.log(getDisplayedAddress(address3));
