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

    // NOTA PER CHI CORREGGE: Non so se questa cosa sia corretta, ma è l'unico modo che mi viene in mente per evitare che, cliccando più volte sul bottone play, si creino più griglie una sotto l'altra.
    //Far scomparire la selezione della difficoltà ed il bottone play per evitare che vengano create più griglie.
    const difficultySelectionElement = document.querySelector('.difficulty_selection'); //Element || Null
    difficultySelectionElement.classList.add('hide'); 


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

        //Inserire le celle nel DOM.
        gridElement.append(cellElement);

        //Quando si clicca su una cella essa si colora di azzurro, cliccando una seconda volta il colore torna normale.
        cellElement.addEventListener('click', function(){
            cellElement.classList.toggle('colored');
            //Viene stampato un console log in cui si dichiare quale cella è stata cliccata.
            console.log('È stata cliccata la cella numero ' + num);
        })

    }
    
})

// FUNZIONI
//Funzione che avrà il compito di determinare la grandezza della griglia.
function gridSize(number){
    size = parseInt(number ** 2);
    return size
}