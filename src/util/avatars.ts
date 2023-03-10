export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`
  };
}

export function stringsAvatar(firstname: string, lastname: string) {
  const short = `${firstname.charAt(0)}${lastname.charAt(0)}`;
  const capitalize = short.toUpperCase();
  const concatenated = `${firstname} ${lastname}`;

  return {
    sx: {
      bgcolor: stringToColor(concatenated)
    },
    children: `${capitalize}`
  };
}
