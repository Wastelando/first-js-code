// js script læring, math, var, parse Int, alert og diverse.

var score = 0;
var score = parseInt(score);

//spørsmål 1
var question1 = prompt("hvor mange js koder har jeg skrevet?");
var question1 = parseInt(question1);

if (question1 === 1 ) {
    score += 1
    console.log("Spørsmål 1 = Det er riktig! Dette er første test!");
} else {
    console.log("Spørsmål 1 = Beklager det er feil..");
}

//spørsmål 2
var question2 = prompt("hvor mange horn har en Enhjørning?");
var question2 = parseInt(question2);

if (question2 === 0) {
    score +=1
    console.log("Spørsmål 2 = Det stemmer nokk det, Enhjørninger fins ikke..");
} else {
    console.log("Spørsmål 2 = Beklager, feil svar..");
}


//spørsmål 3
var question3 = prompt("Hva heter jeg?");

if(question3 === "joakim" || question3 === "joakim" ) {
    score +=1
    console.log("Spørsmål 3 = The one and only! ");
} else {
    console.log("Spørsmål 3 = Litt skuffende må jeg si");
}

//spørsmål 4
var question4 = prompt("20 + 20 er hva?");
var question4 = parseInt(question4);

if (question4 === 40) {
    score +=1
    console.log("Spørsmål 4 = Jøsses det var rett!");
} else {
    console.log("Spørsmål 4 = Nope, tilbake på skolen med deg");
}

// spørsmål 5

var question5 = prompt("Hvem er best?");

if (question5 === "du" || question5 === "Du") {
    score +=1
    console.log ("Spørsmål 5 = Jepp, ingen andre!");
} else{
    console.log("Spørsmål 5 = Ehh, kafaen..");
}

//få console.log printet på siden..

var message = ("du fikk " + score + " av 5 rette!")

if ( score > 3) {
    message += (" Jøss!")
} 
 else {
    message += (" Du klarer litt bedre..")
} 





if (score === 5) { 
    
    message += (" Full pott! hent premien din NÅ!!!")
}

document.write(message);


