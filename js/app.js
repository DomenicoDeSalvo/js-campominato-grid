//Cliccando sul bottone "Play" verrà generata una griglia le cui dimensioni cambieranno in base alla difficoltà selezionata.
//Acquisizione del bottone.
const submitElement = document.querySelector('.submit');//Element || Null
//Acqisizione livelli di difficoltà.
const difficultyElement = document.querySelector('.difficulties');//Element || Null
//Dichirazione variabile a cui assegnare il valore.
let difficulty = '';//string

// La griglia sarà formata da quadrati uguali che si troveranno all'interno del div con classe grid del DOM
// Acquisizione dell div.
const gridElement = document.querySelector('.grid');//Element||Null
//Creazione del div che andrà inserito nella griglia.
const cellElement = document.createElement('div'); //Object
//Assegnazione al div della classe "cell"
cellElement.className = 'cell';
//All'interno di ogni quadrato ci sarà il numero che indica la sua poszione nella griglia.
let num = ''
cellElement.innerHTML = num;

//Assegnazione del valore al click.
submitElement.addEventListener('click', function(){
    difficulty = difficultyElement.value;//string
    
})

// FUNZIONI
//Funzione che avrà il compito di determinare la grandezza della griglia.
function gridSize(number){
    size = parseInt(number ** 2);
    return size
}