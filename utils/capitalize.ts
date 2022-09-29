export default function (value: string) {
  const newString = String(value);
  const firstLetter = newString.charAt(0).toLocaleUpperCase();
  return firstLetter + newString.substring(1);
}