const num = document.getElementById(`num`);
const sum = document.getElementById(`sum`);
const rest = document.getElementById(`rest`);
const reset = document.getElementById(`reset`)
const temporizador = document.getElementById(`temporizador`);


let numero = 0;

let tempo = 10;

    setInterval(() => {
        if(tempo === -1){
            return tempo === 0
        }
        return temporizador.innerText = `${tempo --} segundos restantes`
    }, 1000)

const reseteo = () => {
    numero = 0
    num.innerHTML = numero;
}

sum.addEventListener('click', () =>{
    numero ++;
    num.innerHTML = numero;
    if(tempo === -1){
        sum.disabled = true;
    }
});

rest.addEventListener('click', () =>{
    if(numero === 0){
        numero = 0
    }else{
        numero --;
        num.innerHTML = numero;
    }
});

reset.addEventListener('click', () => {
    reseteo()
})