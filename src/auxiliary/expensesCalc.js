let {
    TimeCalc
} = require('./TimeCalc')

const expensesCalc = (current, tarifaparqueo) => {
    calcDate = new Date(current.fechaEntrada.getTime() + 10000000)
    difference = TimeCalc(current.fechaEntrada, calcDate)
    console.log(difference)
    totalPaymentRequirement = 0
    if (difference.minutos > 0) {
        console.log("algo")
        totalPaymentRequirement = (difference.meses * tarifaparqueo.tarifaMes) + (difference.dias * tarifaparqueo.tarifaDia)  + (difference.horas * tarifaparqueo.tarifaHora) + (tarifaparqueo.tarifaFraccion) + (difference.minutos * tarifaparqueo.tarifaMinuto)

    } else {
        totalPaymentRequirement = (difference.meses * tarifaparqueo.tarifaMes) + (difference.horas * tarifaparqueo.tarifaHora)+ (difference.dias * tarifaparqueo.tarifaDia) 
    }
    return totalPaymentRequirement
    // tarifaEspecial: 'Number',
}
tarifaParqueo = {
    tarifaMes : 0,
    tarifaHora: 500,
    tarifaFraccion: 100,
    tarifaDia: 0,
    tarifaMinuto: 0,
    tarifaMes: 0
}
current = {
    fechaEntrada: new Date()
}
//console.log(expensesCalc(current, tarifaParqueo))
module.exports = expensesCalc