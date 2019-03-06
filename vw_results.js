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
    return (100 * value / sum);
}

// A variable named reportHtML containing HTML text that is replaced by the raceTitle variable.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// A for loop that loops through the contents of the race array.
for (var i = 0; i < race.length; i++) {

    // A variable named totalVotes valie is set to 0.
    var totalVotes = 0;
    votes[i].forEach(calcSum);


    // The following HTML text is added to the value of the reportHTML variable.
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Voters</th></tr>";

    // This is caling the candidateRows function using the counter variables i and totalVotes as the parameter values.
    reportHTML += candidateRows(i, totalVotes);

    // Adds the closing table tag to the reportHTML variable. 
    reportHTML += "</table>";
}
// The value of the reportHTML variable is being stored in the section element in the HTML.
document.getElementsByTagName('section')[0].innerHTML = reportHTML;

// Function named candidateRows(), that has the parameters raceNum and totalvotes.
function candidateRows(raceNum, totalVotes) {

    // A variable named rowHtML is set to an empty text string.
    var rowHTML = "";

    // A for loop that goes from 0 to 2 in steps of 1 unit.
    for (var j = 0; j <= 2; j++) {

        // A variable named candidateName that retrieves the name of the current candidate and the current race.
        var candidateName = candidate[raceNum][j];

        // A variable named candidatePartyt that retrieves the name of the candidates party.
        var candidateParty = party[raceNum][j];

     // A variable named candidateVotes that retrieves the votes for the current race.
        var candidateVotes = votes[raceNum][j];

        // A variable named candidatePercent that is set equal to the value returned by the calcPercent function with candidateVotes and totalVotesfirst as the parameter values.
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        // Adds the following HTML code to the value of the rowHTML variable
        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ") </td><td>" + candidateVotes.toLocaleString() + "( " + candidatePercent.toFixed(1) + "%)</td>";

        // A for loop with a variable k that goes from 0 up to a value less than candidatePercent in increments of 1 unit.
        for(var k = 0; k <= candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
       rowHTML += "</tr>"

    }

    // Returns the value of the rowHTML variable.
    return rowHTML;
}

// A function named createBar with the parameter partyType.
function createBar(partyType) {

    // A variable named barHtML has a value of a empty text string.
    var barHTML = "";

    // A switch/case statement that tests the value of the partyType parameter.
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    // Returns the value of the barHTML variable.
    return barHTML;
}