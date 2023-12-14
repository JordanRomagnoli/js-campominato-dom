

const randomNList = [];
console.log(randomNList);



const buttonStart = document.querySelector('button');

let gameSwitch = false;
buttonStart.addEventListener('click', function(){
    let selectDifficult = parseInt(document.querySelector('select').value);
    gameSwitch = true;


    // genero 16 numeri casuali , uno diverso dall'altro da inserire all'interno dell'array
    for(let j = 0; j < 16; j++){

        let randomN = randomizer(1, selectDifficult);

        let foundInArray = randomNList.includes(randomN);

        // verifico che i numeri siano uno diverso dall'altro 
        while (foundInArray == true) {
            
            randomN = randomizer(1, selectDifficult);
            foundInArray = randomNList.includes(randomN);
        }

        randomNList.push(randomN);

    }

    if (gameSwitch == true){ 
        gameSwitch = false;
        document.querySelector('.grill').innerHTML = '';
    }

    
    for(let i = 1; i <= selectDifficult; i++){

        
        let cell = document.createElement('div');
        cell.innerHTML = i;
        document.querySelector('.grill').append(cell);
        
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
            }else{
                this.classList.add('active');
            }
            console.log(this.innerHTML);
        }
        );

        
        
    }
    
    
}
);



//---- FUNCTIONS -------------------------------------------

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}