/////////////////Exercise #1 FizzBuzz
// Fizz Buzz Challenge: 
// Print 1 - 100
// If % 3 print Buzz
// if % 5 print Fizz
//if % 15 print FizzBuzz

for( var i = 1; i <= 100; i++){
   if( i % 3 == 0) console.log("Buzz");
   else if (i % 5 == 0) console.log("Fizz");
   else if (i % 15 == 0) console.log("FizzBuzz");
   else console.log(i);
};



//////////////Exercise #2 ChessBoard
//create 8X8 grid 
//with the characters #, " "
//creat an empty sting to add characters to and use \n to seperate rows

var chessBoard = "";


for( var x = 1; x <= 8; x++){

    for( var y = 1; y <= 8; y++){
        if( (x+y) % 2 == 0)
        chessBoard += "#";
        else 
        chessBoard += " ";

    }
    chessBoard += "\n";
}

console.log(chessBoard);