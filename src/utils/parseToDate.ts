export default function (stringDate: string, type?: 'date' | 'datetime') {
  const [date, time] = stringDate.split('T');
  const [year, month, day] = date.split('-');
  const [hours, minutes, seconds] = time.split(':');

  if (type === 'date') {
    return new Date(
      Number(year), 
      Number(month)-1, 
      Number(day),  
    );
  }

  return new Date(
    Number(year), 
    Number(month), 
    Number(day), 
    Number(hours), 
    Number(minutes), 
    Number(seconds), 
  );
}

export function parseToDateFromInput (stringDate: string) {
  const [year, month, day] = stringDate.split('-');
  return new Date(
    Number(year), 
    Number(month)-1, 
    Number(day),  
  );
}