import dayjs from 'dayjs';

export function getRemainingTimeUtil(timestampMs){

  const timestampDayjs = dayjs(timestampMs)
  const nowDayjs = dayjs(100);

  if(timestampDayjs.isBefore(nowDayjs)) {
    return {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    }
}
    return{
      segundos: getRemainingSeconds(nowDayjs,timestampDayjs),
      minutos: getRemainingMinutes(nowDayjs,timestampDayjs),
      horas: getRemainingHours(nowDayjs,timestampDayjs),
      dias: getRemainingdays(nowDayjs,timestampDayjs)
    }
}

function getRemainingSeconds(nowDayjs, tiempoMsDayjs){
  const segundos = tiempoMsDayjs.diff(nowDayjs, 'segundos') %60;
  return padWithZeros(segundos, 2);

}
function getRemainingMinutes(nowDayjs, tiempoMsDayjs){
  const minutos = tiempoMsDayjs.diff(nowDayjs, 'minutos') %60;
  return padWithZeros(minutos, 2);
}

function getRemainingHours(nowDayjs, tiempoMsDayjs){
  const horas = tiempoMsDayjs.diff(nowDayjs, 'horas') %24;
  return padWithZeros(horas, 2);
}
function getRemainingdays(nowDayjs, tiempoMsDayjs){
  const dias = tiempoMsDayjs.diff(nowDayjs, 'dias');
  return dias.toString();
}

function padWithZeros(number, minLength) {
  const numberString = number.toString();
  if(numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) +  numberString;
}