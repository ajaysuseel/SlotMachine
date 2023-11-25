const game=()=>{
    const prompt=require("prompt-sync")();
    const ROWS=3;
    const COLMS=3;
    console.log("*****SLOT MACHINE*****\n");
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
    let balance =deposit();
    while(true){
    SYMBOLS_COUNT={
        A:Math.floor(Math.random()*10),
        B:Math.floor(Math.random()*10),
        C:Math.floor(Math.random()*10),
        D:Math.floor(Math.random()*10)
    };

    const SYMBOL_VALUES={
        A:Math.floor(Math.random()*6),
        B:Math.floor(Math.random()*6),
        C:Math.floor(Math.random()*6),
        D:Math.floor(Math.random()*6)
    };



    const getNumberOfLines =()=>{
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

    };

    const symbols=[];
    const spin=()=>{
        
        for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
            for(let i = 0;i<count;i++)
            {
                symbols.push(symbol);
            }
        }
        const reels=[];//creating reels : each sub matrix for each column
            for(let i=0;i<ROWS;i++){
                const reelSymbols=[...symbols];//Copying all data from symbols => reelSymbols
                reels.push([]);
                for(let j=0;j<COLMS;j++){
                    const randomIndex=Math.floor(Math.random()*reelSymbols.length);
                    const selectedSymbol=reelSymbols[randomIndex];
                    reels[i].push(selectedSymbol);
                    reelSymbols.splice(randomIndex,1);

                }
            }
        return reels;   
    };

    const transpose=(reels)=>{
        const rows=[];
        for(let i=0;i<ROWS;i++){
            rows.push([]);
            for(let j=0;j<COLMS;j++){
                
                rows[i].push(reels[j][i]);
            }
        }
        return rows;
    };

    let rowString;
    const printRows=(rows)=>{
        for(const row of rows) {
            rowString="";
            for(const[i,symbol] of row.entries()){
                rowString+=symbol;
                if(i!=ROWS.length-1){
                    rowString+=" | ";
                }
            }
            console.log(rowString);
        } 
    };

    const getwinnings=(rows,lines,bet)=>{
        let winnings=0;
        for (let row=0;row<lines;row++){
            let symbols=rows[row];
            let allSame=true;
            for(let symbol of symbols){
                if(symbol!=symbols[0]){
                    allSame=false;
                }
            }
            if(allSame){
                winnings+=bet*SYMBOL_VALUES[symbols[0]];
            }
        }
        return winnings;
    };

        //Interface
        console.log("Your balance is "+balance.toString()+" ZER")
        const numberOfLines=getNumberOfLines();
        const bet=getBet(balance,numberOfLines);
        balance-=bet*numberOfLines;
        const reels=spin();
        const rows=transpose(reels);
        console.log("\n");
        printRows(rows);
        const winnings=getwinnings(rows,numberOfLines,bet);
        balance+=winnings;
        console.log("\nCongratulations,you have won "+winnings.toString()+" ZER\n");

        if(balance<=0){
            console.log("Oops!You have run out of ZER!Go mine some ZER boys!");
            break;
        }
        const playAgain=prompt("Do you want to continue(y/n) :");
        if(playAgain!='y') break;

        }
};
game();




