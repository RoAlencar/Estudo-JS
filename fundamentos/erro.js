function tratarErroELancar(erro) {
    throw 10
}


function imprimirNomeGritado(obj) {
    try{    
    console.log(obj.name.toUpperCase() + '!!!!')
    }catch (e) {
     tratarErroELancar(e)
    } finally {
        console.log('Final')
    }

}

const obj = { name : 'Roberto' }
imprimirNomeGritado(obj)