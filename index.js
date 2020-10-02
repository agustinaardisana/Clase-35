const subtotal = document.querySelector("#subtotal")
const recargo = document.querySelector("#recargo")
const descuento = document.querySelector("#descuento")
const envio = document.querySelector("#envio")
const total = document.querySelector("#total")

const opcionesDePago = document.querySelectorAll(".opcionesDePago")

const efectivo = document.querySelector("#efectivo")
const credito = document.querySelector("#credito")
const envioOpcion = document.querySelector("#envioCheck")
const tarjetaDescuento = document.querySelector("#descuentoCheck")
 


let subtotalNumero = Number(subtotal.dataset.precio)


subtotal.textContent = 5540

for (let opcion of opcionesDePago) {
    opcion.oninput = () => {
        calcularTotal()
    }
}

const renglonRecargo = document.querySelector('.renglon-recargo')
let resultadoRecargo 

const recargoTarjeta = () => {
    if (credito.checked) {
        resultadoRecargo =  subtotalNumero * 0.1 
        recargo.textContent = resultadoRecargo
        renglonRecargo.classList.remove('hidden')
    }
    else {
        resultadoRecargo = 0
        renglonRecargo.classList.add('hidden')
    }
    return resultadoRecargo
}

const renglonDescuento = document.querySelector('.renglon-descuento')
let resultadoDescuento

const aplicarDescuento = () => {
    if (tarjetaDescuento.checked) {
        resultadoDescuento = - subtotalNumero * 0.1
        descuento.textContent = resultadoDescuento
        renglonDescuento.classList.remove('hidden')
    }
    else {
        resultadoDescuento = 0
        renglonDescuento.classList.add('hidden')
    }
    return resultadoDescuento
}

const renglonEnvio = document.querySelector('.renglon-envio')
let resultadoEnvio

const recargoEnvio = () => {
    if (envioOpcion.checked) {
        resultadoEnvio =  50
        envio.textContent = resultadoEnvio
        renglonEnvio.classList.remove('hidden')
        
    }
    else {
        resultadoEnvio = 0
        renglonEnvio.classList.add('hidden')
    }
    return resultadoEnvio
}


const calcularTotal = () => {
    let totalReal = subtotalNumero 
    totalReal = subtotalNumero + recargoEnvio() + aplicarDescuento() + recargoTarjeta()
    total.textContent = totalReal
    return totalReal
}
