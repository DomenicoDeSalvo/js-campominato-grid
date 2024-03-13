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

//Assegnazione del valore al click.
submitElement.addEventListener('click', function(){
    difficulty = difficultyElement.value;//string

    // In base alla difficoltà verrà generata una griglia di dimensioni diverse.
    for(let i = 0; i < gridSize(difficulty); i++){

        //Creazione del div che andrà inserito nella griglia.
        const cellElement = document.createElement('div'); //Object
        //Assegnazione al div della classe "cell"
        cellElement.className = 'cell';
        //All'interno di ogni cella ci sarà un numero corrispondente alla sua posizione nella griglia.
        const num = i + 1; //Number
        cellElement.innerHTML = num;
        //A Diversa difficoltà corrisponde una diversa quantità di celle, che quindi avranno dimensioni diverse.
        if(difficulty === '10') {
            cellElement.classList.add('difficulty1');
        } else if(difficulty === '9') {
            cellElement.classList.add('difficulty2');
        } else {
            cellElement.classList.add('difficulty3');
        }

    }
    
})

// FUNZIONI
//Funzione che avrà il compito di determinare la grandezza della griglia.
function gridSize(number){
    size = parseInt(number ** 2);
    return size
}