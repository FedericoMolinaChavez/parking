let timeCalc = require('./TimeCalc')

const expensesCalc = (current, tarifaparqueo) => {
    tarifatypes = [0,0,0,0,0,0]
    if(tarifaparqueo.tarifaHora != 0){
        tarifatypes[0] = 1
    }
    if(tarifaparqueo.tarifaFracción){
        tarifatypes[1] = 1
    }
    if(tarifaparqueo.tarifaminuto){
        tarifatypes[2] = 1
    }
    if( tarifaparqueo.tarifaDía){
        tarifatypes[3] = 1
    }
    if(tarifaparqueo.tarifaMes){
        tarifatypes[4] = 1
    }
    if(tarifaparqueo.tarifaSemana){
        tarifatypes[5] = 1
    }
    calcDate = new Date()
    difference = timeCalc(current.fechaEntrada,calcDate)
    totalPaymentRequirement = 0
    
   // tarifaEspecial: 'Number',
   
}
module.exports.expensesCalc = expensesCalc