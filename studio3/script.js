(function(){
    'use strict'
    console.log('reading JS');

    // overlay stuff here

    const myOverlay = document.querySelector('#instructionsButton');
    myOverlay.addEventListener('click', myFunction);

    function myFunction() {
        const myOverlayView = document.getElementById('overlay');
        myOverlayView.removeAttribute('class');
        myOverlayView.classList.add('showing');
        console.log("button has been clicked")

        // const arfSound = document.getElementById('instructionsButton'); ACTUALLy myOverlay??
        const arfSound = new Audio('mp3/dogBarking.mp3');
        arfSound.play();
    }


    const closeOverlay = document.querySelector("#closeButton")
    closeOverlay.addEventListener('click', closeMyOverlay);

    function closeMyOverlay() {
        const closeOverlayView = document.getElementById('overlay');
        closeOverlayView.removeAttribute('class');
        closeOverlayView.classList.add('hidden');
    }





    
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');


    const gameData = {
        dice: ['images/oneTreat.png', 'images/twoTreats.png', 'images/threeTreats.png', 'images/fourTreats.png', 'images/fiveTreats.png', 'images/sixTreats.png'],
        players: ['Cali', 'Charlie'],
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


    gameControl.innerHTML = '<h2 id = "theMission">The Mission Has Begun!</h2>';
    gameControl.innerHTML += '<button id="quit">Restart?</button>';

    document.getElementById('quit').addEventListener("click", function(){
        location.reload();
    });


    /* console.log("set up the turn!"); */

     setUpTurn();

    });

    function setUpTurn(){
        game.innerHTML = ``;
        actionArea.innerHTML = `<button id="roll">Let's go!</button>`;
        document.getElementById('roll').addEventListener('click', function(){
            // console.log("role the dice!");
            throwDice();
        });

    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Look at the lot for ${gameData.players[gameData.index]}!</p>`;
        game.innerHTML += `<img class = "image1" src="${gameData.dice[gameData.roll1-1]}"> <img class = "image2" src="${gameData.dice[gameData.roll2-1]}">` ;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        console.log(gameData.rollSum);

        if (gameData.rollSum === 2) {
            // console.log('snake eyes!');
            const whineSound = new Audio('mp3/whiningSound.mp3');
            whineSound.play();
            game.innerHTML += `<p id = "ohSnap" >oh snap! The handler got ${gameData.players[gameData.index]}!!</p> <br> <p>Bye bye treats :(</p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            setTimeout(setUpTurn, 8000);
            showCurrentScore();
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // console.log('a one was rolled!');

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            game.innerHTML += `<p id = "getOne" >sorry, you only got one treat, so that means the handler was alerted someone was stealing biscuits! Let's try to send ${gameData.players[gameData.index]} :)</p>`
            setTimeout(setUpTurn, 5000);
        } else {
            // console.log('the game continues...');
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id = "rollAgain">Make another Trip!</button>       <button id = "pass">Nap Time!!!</button>`;

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
                score.innerHTML = `<h2 id = "winning">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points :)</h2>`;

                actionArea.innerHTML = "";
                document.getElementById("quit").innerHTML = "start a new game";
            } else {
                showCurrentScore();
            }
        }

        function showCurrentScore() {
            // score.innerHTML = `<p>The score is currently <strong> ${gameData.players[0]} has ${gameData.score[0]} points</strong> and <strong> ${gameData.players[1]} has ${gameData.score[1]} points</strong></p>`;

            scoreCali.innerHTML = `<p>${gameData.score[0]} Biscuits</p>`;

            scoreCharlie.innerHTML = `<p>${gameData.score[1]} Biscuits</p>`;
        }
    }
})();