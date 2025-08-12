export function hideName(name) {
  if (typeof name !== 'string') {
    return 'Input provided is not a valid name';
  }

  const validName = name.trim().split(/\s+/);
  if (validName.length < 2) {
    return 'Input provided is not a valid name';
  }

  for (let i = 0; i < validName.length; i++) {
    if (!/^[A-Za-z'-]+$/.test(validName[i])) {
      return 'Input provided is not a valid name';
    }
  }

  const fullName = validName;
  const upperFullName = fullName.map((namePart) => namePart.toUpperCase());

  let firstNames = [];

  for (let i = 0; i < upperFullName.length - 1; i++) {
    let name = upperFullName[i];

    if (name.length <= 3) {
      firstNames.push(
        name[0] + '*'.repeat(name.length - 2) + name[name.length - 1]
      );
    } else {
      firstNames.push(
        name.slice(0, 2) + '*'.repeat(name.length - 3) + name[name.length - 1]
      );
    }
  }

  const lastName = upperFullName[upperFullName.length - 1][0] + '.';

  return firstNames.join(' ') + ' ' + lastName;
}
