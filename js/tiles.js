/*  
 */
var newTile;
var letterIndex;
var MyLetterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var ScrabbleTiles = [];
// ScrabbleTiles.A
ScrabbleTiles["A"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_A.jpg", "original-distribution": 9, "number-remaining": 9 };
ScrabbleTiles["B"] = { "value": 3, "img": "css/Scrabble_Tiles/Scrabble_Tile_B.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["C"] = { "value": 3, "img": "css/Scrabble_Tiles/Scrabble_Tile_C.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["D"] = { "value": 2, "img": "css/Scrabble_Tiles/Scrabble_Tile_D.jpg", "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["E"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_E.jpg", "original-distribution": 12, "number-remaining": 12 };
ScrabbleTiles["F"] = { "value": 4, "img": "css/Scrabble_Tiles/Scrabble_Tile_F.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["G"] = { "value": 2, "img": "css/Scrabble_Tiles/Scrabble_Tile_G.jpg", "original-distribution": 3, "number-remaining": 3 };
ScrabbleTiles["H"] = { "value": 4, "img": "css/Scrabble_Tiles/Scrabble_Tile_H.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["I"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_I.jpg", "original-distribution": 9, "number-remaining": 9 };
ScrabbleTiles["J"] = { "value": 8, "img": "css/Scrabble_Tiles/Scrabble_Tile_J.jpg", "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["K"] = { "value": 5, "img": "css/Scrabble_Tiles/Scrabble_Tile_K.jpg", "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["L"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_L.jpg", "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["M"] = { "value": 3, "img": "css/Scrabble_Tiles/Scrabble_Tile_M.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["N"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_N.jpg", "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["O"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_O.jpg", "original-distribution": 8, "number-remaining": 8 };
ScrabbleTiles["P"] = { "value": 3, "img": "css/Scrabble_Tiles/Scrabble_Tile_P.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["Q"] = { "value": 10, "img": "css/Scrabble_Tiles/Scrabble_Tile_Q.jpg", "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["R"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_R.jpg", "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["S"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_S.jpg", "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["T"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_T.jpg", "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["U"] = { "value": 1, "img": "css/Scrabble_Tiles/Scrabble_Tile_U.jpg", "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["V"] = { "value": 4, "img": "css/Scrabble_Tiles/Scrabble_Tile_V.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["W"] = { "value": 4, "img": "css/Scrabble_Tiles/Scrabble_Tile_W.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["X"] = { "value": 8, "img": "css/Scrabble_Tiles/Scrabble_Tile_X.jpg", "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["Y"] = { "value": 4, "img": "css/Scrabble_Tiles/Scrabble_Tile_Y.jpg", "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["Z"] = { "value": 10, "img": "css/Scrabble_Tiles/Scrabble_Tile_Z.jpg", "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles[""] = { "value": 0, "img": "", "original-distribution": 2, "number-remaining": 2 };

let randomLetter = function () {
    let letterIndex = Math.floor(Math.random() * (27 - 1) + 1);
    return MyLetterArr[letterIndex]; // guaranteed to be random
}

let generateTiles = function () {
    //let letterIndex = Math.floor(Math.random() * (27 - 1) + 1);

    let letter = randomLetter(letterIndex);
    //console.log(letter);
    //console.log(ScrabbleTiles[letter]);
    //console.log(ScrabbleTiles[letter].img);
    return "<img src =" + ScrabbleTiles[letter].img + " alt = " + letter + " >";
};

let parseWord = function(letters) {
    return letters.join("");
}

/* 
create check word function 
calculates the value of the word. 
must be sucessive letters calculates for 
double letter position and the doble word position.  
*/

let word = ["", "", "", "", ""];
let wordScore = "";
$(document).ready(function () {
    $("#Tile_1").append(generateTiles());
    $("#Tile_2").append(generateTiles());
    $("#Tile_3").append(generateTiles());
    //console.log(letter.ScrabbleTiles.img); 
    //$(this).index()
    //console.log("test");
    
    $(".snapTarget").droppable({
        drop: function (e, ui) {
            //let sum = 0;
            console.log("test");
            let i = $(this).index();
            word[i] = ui.draggable.children(":first").attr("alt");
            console.log(word)
        },
        //let sum = 0; 
        out: function(){
            let i = $(this).index();
            word[i] = "";
            console.log(word);
        }
        
    });

});
//console.log(sum);
let score = 0;
let checkWord = function() {
    score = 0;
    for( var i = 0; i <= 4 ; i++ ) {
        if(i == 2) {
           score += (2 * ScrabbleTiles[word[i]].value);
        } else { 
            score += ScrabbleTiles[word[i]].value; 
        }
    //score += ScrabbleTiles[word[i]].value;
    }
    if(ScrabbleTiles[word[4]].value != 0)
    {
        score = 2 * score;
    }
    $('#newScore').append("<p>" + " word: " + parseWord(word) + ", score: " + score + "</p>"); 
    console.log(score);
}
let playAgain = function () {

};
let quit = function () {

};