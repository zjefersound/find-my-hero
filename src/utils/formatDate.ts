export default function (date: Date, type?: 'dd/mm/yyyy') {
  
  if(type==='dd/mm/yyyy'){
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(date);
}