/*

 The Cashier Problem

 Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change. 

 */



// WORKING WITH CLASS


class Cashier {

    constructor(paidAmount, price) { // Class will take 2 parameters.

        this.paidAmount = paidAmount;
        this.price = price;
        this.returnAmount;

        // I should create an arrays of array to check and return my output with notes after. I created my notes according to expected output in readme file.

        this.notes = [[200, 'Two Hundred Euro Notes'], [100, 'One Hundred Euro Note'], [50, 'Fifty Euro Notes'], [20, 'Twenty Euro Notes'], [10, 'Ten Euro Notes'], [5, 'Five Euro Notes'], [2, 'Two Euro'], [1, 'One Euro'], [0.5, 'Fifty Cents Coin'], [0.2, 'Twenty Cents Coin'], [0.1, 'Ten Cents Coin'], [0.05, 'Five Cents Coin'], [0.02, 'Two Cents Coin'], [0.01, 'One Cent Coin']];

        // Since I want to call my methods immediately with my instance, I added them inside my constructor

        this.findReturnAmount();
        this.resultWithNotes();
    }

    findReturnAmount() { // First we need to find the return amount. 

        this.returnAmount = (this.paidAmount - this.price).toFixed(2);
        console.log(`Return Amount : €${this.returnAmount}`) ;
    }

    resultWithNotes(){ // Finally We need to return our output with notes

        let notesNum; // we need an undefined variable for defining after the number of notes
       

        for(let i = 0; i < this.notes.length; i++){ // we need a loop to check every items of "notes" array

            if(this.returnAmount >= this.notes[i][0]){ // this condition is for finding our notes of return amount and their amounts if we have return amount 

                notesNum = Math.floor(this.returnAmount / this.notes[i][0]);
                this.returnAmount = ( this.returnAmount % this.notes[i][0]).toFixed(2)
                console.log(`${notesNum} x €${this.notes[i][0]} || ${notesNum} x ${this.notes[i][1]}`)

            }
        }

        if (this.returnAmount < 0) console.log(`You need to pay €${Math.abs(this.returnAmount)} more.`); // we also need to add a condition if our paid amount is less then the price. So this condition is for the case that we don't have return amount but credit.      

    }
}


let solveProblem = new Cashier(50, 3.75); 
/* 
    Return Amount : €46.25
    2 x €20 || 2 x Twenty Euro Notes
    1 x €5 || 1 x Five Euro Notes
    1 x €1 || 1 x One Euro
    1 x €0.2 || 1 x Twenty Cents Coin
    1 x €0.05 || 1 x Five Cents Coin
*/

solveProblem = new Cashier (3, 4);
/* 
    Return Amount : €-1.00
    You need to pay €1 more.
*/

solveProblem = new Cashier (20, 4.5);
/* 
    Return Amount : €15.50
    1 x €10 || 1 x Ten Euro Notes
    1 x €5 || 1 x Five Euro Notes
    1 x €0.5 || 1 x Fifty Cents Coin
*/