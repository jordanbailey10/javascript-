// this variable keeps track of who's turn it is.
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber)  {
    //this condition ensure a square hasn't been selected already
    //the .some() method is used to check each element of selectedSquare array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(Element => Element.includes(squareNumber)))  {
    //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if (activePlayer === 'X')  {
            //if activeplayer is equal to 'X' the x.png is placed in html.
            select.style.backgroundImage = 'url("images/x.png")'; //check image path
        //active player may only be x or o so if not x it mus be 0
    
        } else {
            //if activeplayer is equal to o the o.png is placed in html.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activeplayer are concatenated togethr and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
         if (activePlayer === 'X') {
             //if active player is x change it to o.
             activePlayer = 'O';
             //if active player is anything other than x.
         } else {
             //change the active player to x
             activePlayer = 'X';
         }
         //This function plays placement sound
         Audio('./media/place.mp3');
         //this condition checks to see if it is computers turn.
         if(activePlayer === 'O') {
             //this function disables clicking for computer choice.
             disableClick();
             //this function waits 1 second before placing the image and enabling click
             setTimeout(funcion () , { computersTurn(); }, 1000);
         }
         //returning true is needed for our computersturn() function to work
         return true;
         }

         //this fnction results in a random square being selected.
         function computersturn() {
             //this boolean is needed for ur while loop.
             let success = false;
             //this variable stores a random number 0-8
             let pickASquare;
             //this condition allows our while loop to keep trying if a square is selected already
             while(!success) {
                 //a random number between 0 and 8 is selected
                 pickASquare = String(Math.floor(Math.random() * 9));
                 //if the random number evaluates returns true the square hasnt been selected yet
                 if (placeXOrO(pickASquare)) {
                     //this line calls the function
                     placeXOrO(pickASquare);
                     //this changes our boolean and ends the loop
                     success = true;
                 };
             }
         }
}