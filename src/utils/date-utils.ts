import { differenceInSeconds, format } from 'date-fns';

export function dateDifference(dateISO: string): string {
  const date = new Date(dateISO);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    if (diffInSeconds < 2) return `há ${diffInSeconds} segundo`;
    return `há ${diffInSeconds} segundos`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    if (diffInMinutes < 2) return `há ${diffInMinutes} minuto`;
    return `há ${diffInMinutes} minutos`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    if (diffInHours < 2) return `há ${diffInHours} hora`;
    return `há ${diffInHours} horas`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    if (diffInDays < 2) return `há ${diffInDays} dia`;
    return `há ${diffInDays} dias`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 5) {
    if (diffInWeeks === 1) return `há ${diffInWeeks} semana`;
    return `há ${diffInWeeks} semanas`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    if (diffInMonths === 1) return `há ${diffInMonths} mês`;
    return `há ${diffInMonths} meses`;
  }

  return format(date, 'dd/MM/yyyy');
}
