function play(){

    document.getElementById('game-container').innerHTML = '';
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



//let playBtn = document.getElementById('play-btn');


//creation of different kind of grids
function createGrid(difficulty, squares){

    //pick the element where the grid will take place
    let grid = document.getElementById('game-container');
    console.log( "grid", grid );

    //let difficulty = choise.value;

    //createSquare(squares);

    for( let i = 1; i <= difficulty; i++ ){

        let createdSquare = createSquare(squares);
        createdSquare.innerHTML = i;
        console.log('createdSquare', createdSquare);
      
        createdSquare.addEventListener('click', function(){
            console.log( "this keyword",this);
            this.classList.toggle('acid-button');
        })
      
        grid.append( createdSquare );
      
    }

    
}
