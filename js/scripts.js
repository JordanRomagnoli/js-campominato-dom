
const buttonStart = document.querySelector('button');
const grid = document.querySelector('.grid');
const endContainer = document.getElementById('end');

let gameSwitch = false;


buttonStart.addEventListener('click', function(){ 
// la partita inizia

    let selectDifficult = parseInt(document.querySelector('select').value);
    gameSwitch = true;

    const randomNList = [];
   

   
    for(let j = 0; j < 16; j++){
        
        let randomN = randomizer(1, selectDifficult);

        let foundInArray = randomNList.includes(randomN);

        while (foundInArray == true) {
            
            randomN = randomizer(1, selectDifficult);
            foundInArray = randomNList.includes(randomN);
        }

        randomNList.push(randomN);

    }

    console.log(randomNList);

    if (gameSwitch == true){ 
        gameSwitch = false;
        grid.innerHTML = '';
        endContainer.innerHTML = '';
    }

    let counterValidCell = 0;
    
    
    for(let i = 1; i <= selectDifficult; i++){

    
        let cell = document.createElement('div');
        cell.innerHTML = i;
        document.querySelector('.grid').append(cell);
        
        if(selectDifficult == 100){
            cell.classList.add('difficult1')
        }else if (selectDifficult == 81){
            cell.classList.add('difficult2')
        }else if (selectDifficult == 49){
            cell.classList.add('difficult3')
        };
        

        cell.addEventListener('click', function(){

            if (randomNList.includes(i)) {
                this.classList.add('bomb')
                resetL(endContainer, counterValidCell);
                setTimeout(() => {grid.innerHTML='';}, 2000);

            }
            else if (!this.classList.contains('active')){
                this.classList.add('active');
                counterValidCell ++;

                console.log(counterValidCell)
            }
                
            
            

            if (counterValidCell == (selectDifficult - 16)){
                resetV(endContainer, counterValidCell, grid);
            }


        }
        );

    }

    
}
);



//---- FUNCTIONS -------------------------------------------

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function resetV(containerFinal, contatore, griglia) {
    
        containerFinal.innerHTML = 'hai vinto, il tuo punteggio è '+ contatore
        griglia.innerHTML = '';
    
} 

function resetL(containerFinal, contatore) {
    
        containerFinal.innerHTML = 'Hai perso, il tuo punteggio è '+ contatore;
    
}