module.exports = { 
    TimeCalc : function(initial, end){
    //console.log(initial.getHours())
    //console.log(end.getHours())
    meses = end.getMonth() - initial.getMonth()
    dias = end.getDate() - initial.getDate()
    if(end.getHours() < initial.getHours()){
        horas = 24-initial.getHours() + end.getHours()
    }
    else{
        horas = end.getHours() - initial.getHours()
    }
    minutos = Math.abs(end.getMinutes() - initial.getMinutes())
    segundos = Math.abs(end.getSeconds() - initial.getSeconds())
    return ({meses : meses, dias : dias, horas : horas, minutos : minutos, segundos : segundos})
}
}