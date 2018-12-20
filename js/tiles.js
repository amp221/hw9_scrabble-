/*  
 */
var newTile;
var letterIndex;
var MyLetterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var ScrabbleTiles = [] ;
// ScrabbleTiles.A
ScrabbleTiles["A"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_A.jpg", "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3, "img" : "css/Scrabble_Tiles/Scrabble_Tile_B.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3, "img" : "css/Scrabble_Tiles/Scrabble_Tile_C.jpg",  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2, "img" : "css/Scrabble_Tiles/Scrabble_Tile_D.jpg", "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_E.jpg","original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4, "img" : "css/Scrabble_Tiles/Scrabble_Tile_F.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2, "img" : "css/Scrabble_Tiles/Scrabble_Tile_G.jpg", "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4, "img" : "css/Scrabble_Tiles/Scrabble_Tile_H.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_I.jpg", "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8, "img" : "css/Scrabble_Tiles/Scrabble_Tile_J.jpg", "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5, "img" : "css/Scrabble_Tiles/Scrabble_Tile_K.jpg", "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_L.jpg", "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3, "img" : "css/Scrabble_Tiles/Scrabble_Tile_M.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_N.jpg", "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_O.jpg", "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3, "img" : "css/Scrabble_Tiles/Scrabble_Tile_P.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "img" : "css/Scrabble_Tiles/Scrabble_Tile_Q.jpg", "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_R.jpg", "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_S.jpg", "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_T.jpg", "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1, "img" : "css/Scrabble_Tiles/Scrabble_Tile_U.jpg", "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4, "img" : "css/Scrabble_Tiles/Scrabble_Tile_V.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4, "img" : "css/Scrabble_Tiles/Scrabble_Tile_W.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8, "img" : "css/Scrabble_Tiles/Scrabble_Tile_X.jpg", "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4, "img" : "css/Scrabble_Tiles/Scrabble_Tile_Y.jpg", "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "img" : "css/Scrabble_Tiles/Scrabble_Tile_Z.jpg", "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0, "img" : "", "original-distribution" : 2,  "number-remaining" : 2  } ;

let randomLetter = function(){
    let letterIndex = Math.floor(Math.random() * (27 - 1) + 1);
    return MyLetterArr[letterIndex]; // guaranteed to be random
}

let generateTiles = function(){
    //let letterIndex = Math.floor(Math.random() * (27 - 1) + 1);

    let letter = randomLetter(letterIndex); 
    
    
    //let tileLetter = document.createElement('letter');
    //let tileImg = document.createElement("<img '' src ='img'");
    
    //this.attr("img");
    //let newTab = $("<li><a href=#" + panelID + ">Tab " + numSavedTabs + "</a></li>");
    
    //$("#Tile_1").append("<img src =" + "/" + ScrabbleTiles[letter].img + ">");

    //$("#Tile_2").append("<img src =" + "/" + ScrabbleTiles[letter].img + ">");

    //$("img").prop("#").append(letter); 
    ScrabbleTiles[letter].img
    console.log(letter);
    console.log(ScrabbleTiles[letter].img);
    return "<img letter = " + " ' " +  letter + " ' " + " src =" + "/" + ScrabbleTiles[letter].img + ">";
  };


$(document).ready(function(){
    $("#Tile_1").append(generateTiles());
    $("#Tile_2").append(generateTiles());

    //console.log(letter.ScrabbleTiles.img); 
    
    $(".snapTarget").droppable({
        drop: function(e, ui){console.log($(this).index()); console.log(ui.draggable.attr("letter"))}
    });
    

    console.log("hello world");
})
