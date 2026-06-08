const pantalla = document.getElementById ('pantalla');

function BorrarNumero() {
    let valorActual = pantalla.value;
    
    if (valorActual.length > 1) {
        pantalla.value = valorActual.slice(0, -1);

    } else {
        pantalla.value = '';
    }
}
function Porcentaje() {
        let pantalla = document.getElementById('pantalla').value;
        
        if (pantalla.includes('%')) {
            let partes = pantalla.split('%');
            let num1 = parseFloat(partes[0]);
            let num2 = parseFloat(partes[1]);

            if (!isNaN(num1) && !isNaN(num2)) {

                let resultado = (num1 / 100) * num2;

                document.getElementById('pantalla').value = resultado;
            } else {
                document.getElementById('pantalla').value = 'Error';
            }
        }
    }

function AgregarValor(valor){
    pantalla.value += valor;
}

function LimpiarPantalla(){
    pantalla.value = '';
}


function Calcular() {
    try {
        let expresion = pantalla.value;
        
        expresion = expresion.replace(/x/g, '*');
        expresion = expresion.replace(/÷/g,'/')
        
        expresion = expresion.replace(/(\d+(?:\.\d+)?)%(\d+(?:\.\d+)?)/g, '($1/100)*$2');
        
        expresion = expresion.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        
        let resultado = eval(expresion);
        
        pantalla.value = Math.round(resultado * 100000000) / 100000000;
    } catch(error) {
        pantalla.value = 'Error';
        setTimeout(() => {
            pantalla.value = '';
        }, 1000);
    }
}
