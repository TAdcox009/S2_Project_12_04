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

    // d. Call the candidateRows() function (you will create this function shortly) using the counter
    // variable i and the totalVotes variable as parameter values. Add the value returned by this function to the value of the reportHTML variable.
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

        //     i.Declare a variable named candidateName that retrieves the name of the current candidate and the current race.(Hint: Retrieve the candidate name from the multidimensional candidate array using the reference, candidate[raceNum][j].)
        var candidateName = candidate[raceNum][j];

        // ii.Declare a variable named candidateParty that retrieves the party affiliation of the current candidate in the current race from the multidimensional party array.
        var candidateParty = party[raceNum][j];

        // iii.Declare a variable named candidatevotes that retrieves the votes cast
        // for the current candidate in the current race from the multidimensional votes array.
        var candidateVotes = votes[raceNum][j];

        // iv.Declare a variable named candidatePercent equal to the value returned by the calcPercent()
        // function, calculating the percentage of votes received by the current candidate in the loop.Use candidateVotes as the first parameter value and totalVotes as the second parameter value.
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        // 12. Scroll up to the candidateRows() function. Directly before the line that adds the HTML code </tr> to the value of the rowHTML variable, insert a for loop with a counter variable k that goes from 0 up to a value less than candidatePercent in increments of 1 unit. Each time through the loop call the createBar() function using candidateParty and candidatePercent as the parameter values

        // v.Add the following HTML code to the value of the rowHTML variable
        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ") </td><td>" + candidateVotes.toLocaleString() + "( " + candidatePercent.toFixed(1) + "%)</td></tr>";

        // where name is the value of candidateName, party is the value of candidateParty, votes is the value of candidateVotes, and percent is the value of candidatePercent.

        // Apply the toLocaleString() method to votes in order to display the vote total with a thousands separator.Apply the toFixed(1) method to percent in order to display percentage values to 1 decimal place.

        // Returns the value of the rowHTML variable.

    }
    return rowHTML;
}
// 10. Pam also wants the report to display the vote percentages as bar charts with the length of the bar corresponding to the percentage value. Return to the vw_results.js file in your editor. At the bottom of the file, create a function named createbar() with one parameter named partyType. Add the commands described in Steps a through b to the function:
function createBar(partyType) {

    // a. Declare a variable named barHtML and set its initial value to an empty text string.
    var barHTML = "";

    //     b. Create a switch/case statement that tests the value of the partyType parameter.
    // If partyType equal “D” set barHTML equal to:
    // <td class='dem'></td> If partyType equals “R” set barHTML equal to: <td class='rep'></td> Finally, if partyType equals “I” set barHTML to: <td class='ind'></td>
    switch (partyTypeP) {
        case "D":
            barHTML = "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
    }
    // 11. Return the value of barHTML.
    return barHTML
}