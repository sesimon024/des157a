(function(){
    'use strict'
    console.log('reading JS');
    
        const startGame = document.querySelector('#startgame');
        const gameControl = document.querySelector('#gamecontrol');
        const game = document.querySelector('#game');
        const score = document.querySelector('#score');
        const actionArea = document.querySelector('#actions');


    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };    

    /* //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum
    */

   /*  console.log(gameData.score[gameData.index]); */

    startGame.addEventListener("click", function(){

    gameData.index = Math.round(Math.random());
    console.log(gameData.index);


    gameControl.innerHTML = '<h2>The Game Has Started</h2>';
    gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    });

    /* console.log("set up the turn!"); */

     setUpTurn();

    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll"> Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            // console.log("role the dice!");
            throwDice();
        });

    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">` ;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        console.log(gameData.rollSum);

        if (gameData.rollSum === 2) {
            // console.log('snake eyes!');
            game.innerHTML += '<p>oh snap! snake eyes</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            setTimeout(setUpTurn, 2000);
            showCurrentScore();
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // console.log('a one was rolled!');

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            game.innerHTML += `<p>sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn, 2000);
        } else {
            // console.log('the game continues...');
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id = "rollAgain">Roll Again</button> or <button id = "pass">Pass</button>`;

            document.getElementById('rollAgain').addEventListener('click', function() {
                setUpTurn();
            });
            document. getElementById('pass') .addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn(); 
            });

            CheckForWin();
        }

        function CheckForWin() {
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points :)</h2>`;

                actionArea.innerHTML = "";
                document.getElementById("quit").innerHTML = "start a new game";
            } else {
                showCurrentScore();
            }
        }

        function showCurrentScore() {
            score.innerHTML = `<p>The score is currently <strong> ${gameData.players[0]} has ${gameData.score[0]} points</strong> and <strong> ${gameData.players[1]} has ${gameData.score[1]} points</strong></p>`;
        }
    }
})();