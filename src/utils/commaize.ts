export function commaize(value: number) {
  return Intl.NumberFormat().format(value);
}
