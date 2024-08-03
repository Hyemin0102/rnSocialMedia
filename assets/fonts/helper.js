export const getFontFamily = (baseFont = 'Rubik', weight) => {
  switch (weight) {
    case '200':
      return `${baseFont}-Light`;
    case '400':
      return `${baseFont}-Medium`;
    case '500':
      return `${baseFont}-Regular`;
    case '600':
      return `${baseFont}-SemiBold`;
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
