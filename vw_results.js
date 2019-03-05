"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Todd Adcox Jr
   Date:   3-4-19  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/





/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

// A variable named reportHtML containing HTML text that is replaced by the raceTitle variable.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// A for loop that loops through the contents of the race array.
for (var i = 0; i <= race; i++) {

// A variable named totalVotes valie is set to 0.
var totalVotes = 0;
votes[i].forEach(calcSum);


// The following HTML text is added to the value of the reportHTML variable.
reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Voters</th></tr>";

// d. Call the candidateRows() function (you will create this function shortly) using the counter
// variable i and the totalVotes variable as parameter values. Add the value returned by this function to the value of the reportHTML variable.
canidateRows()

// e. Add the text </table> to the value of the reportHTML variable. 

}
//7. After the for loop has completed, write the value of the reportHTML variable into the innerHTML of the first (and only) section element in the document.
