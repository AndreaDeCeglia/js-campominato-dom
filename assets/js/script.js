
//bombs' array
let bombs = [];
console.log(bombs);

//score's variable
let score = [];
console.log(score);

function play(){

    document.getElementById('game-container').innerHTML = '';

    bombs = [];
    //pick the value of the choise
    let choise = document.getElementById("inputGroupSelect04").value;
    console.log(choise);

    switch(choise){
        case "easy":
            createGrid(100, "quadrato10");
            break;
        case "medium":
            createGrid(81, "quadrato9");
            break;
        case "hard":
            createGrid(49, "quadrato7");
            break;
    }
}


//creation of squary div into the grid
function createSquare(squares){
    const div = document.createElement('div');
    div.classList.add(squares);
    return div;
}

//randomic number function
function randomic(difficulty){

    for( let x=0; x<16; x++){
        let randomNumber = Math.round(Math.random() * (difficulty - 1 + 1)) + 1;
        if( bombs.includes(randomNumber)){
            x--;
        }else{
            bombs.push(randomNumber);
        }
    }

    console.log(bombs);
}



//let playBtn = document.getElementById('play-btn');


//creation of different kind of grids
function createGrid(difficulty, squares){

    //pick the element where the grid will take place
    let grid = document.getElementById('game-container');
    console.log( "grid", grid );

    randomic(difficulty);


    for( let i = 1; i <= difficulty; i++ ){

        let createdSquare = createSquare(squares);
        createdSquare.innerHTML = i;
        console.log('createdSquare', createdSquare);

        let scoreCounter =document.getElementById('score-counter'); 
        scoreCounter.classList.add('acid-button');

        createdSquare.addEventListener('click', function(){
            console.log( "this keyword",this);
            //
            if( bombs.includes(parseInt(this.innerHTML))){
                //booooom
                this.innerHTML = "BooM";
                this.classList.add('boom-button');
                
                
            }else{
                this.classList.add('acid-button');
                score.push('point');
                console.log(score);
                scoreCounter.innerHTML = `your score is ${score.length} !!`;
            }
        })
        
        grid.append( createdSquare );
      
    }

    
}
