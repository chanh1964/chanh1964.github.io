export function dateToString(date: number) {
  const _date = date.toString();
  if (_date.length == 8)
    return `${_date.slice(0, 4)}.${_date.slice(4, 6)}.${_date.slice(6)}`;
  if (_date.length == 6) return `${_date.slice(0, 4)}.${_date.slice(4, 6)}`;
  return _date;
}
