
const prompt=require("prompt-sync")();

const ROWS=3;
const COLUMNS=3;

const SYMBOLS_COUNT={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOL_VALUES={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit=()=>{
    while(true){
        const depositAmount=prompt("Enter the deposit amount: ");
        const numberDepositAmount=parseFloat(depositAmount);
        if(isNaN(numberDepositAmount)||numberDepositAmount<=0){
            console.log("Invalid deposit amount"); 
        }
        else{
            return numberDepositAmount;
        }
    }
};

const numberOfLines =()=>{
    while(true){
        const numOfLines=prompt("Enter the NUMBER OF LINES: ");
        const numberOfLines=parseFloat(numOfLines);
        if(isNaN(numberOfLines)||numberOfLines<=0||numberOfLines>3){
            console.log("Invalid number Of Lines"); 
        }
        else{
            return numberOfLines;
        }
    }

};

const getBet=(balance,lines)=>{
    while(true){
        const bet=prompt("Enter the bet amount: ");
        const numberBet=parseFloat(bet);
        if(isNaN(numberBet)||numberBet<=0||numberBet>balance/lines){
            console.log("Invalid deposit<Try again"); 
        }
        else{
            return numberBet;
        }
    }

}

let balance=deposit();
const lines=numberOfLines();
const bet=getBet(balance,lines);
