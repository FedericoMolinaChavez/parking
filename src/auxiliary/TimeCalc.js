const TimeCalc = (initial, end) => {
    meses = end.getMonth() - initial.getMonth()
    dias = end.getDate() - initial.getDate()
    horas = end.getHours() - initial.getHours()
    minutos = end.getMinutes() - initial.getMinutes()
    segundos = end.getSeconds() - initial.getSeconds()
    return ([meses, dias, horas, minutos, segundoss])
}
module.exports.TimeCalc = TimeCalc