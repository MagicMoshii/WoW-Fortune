function doRaidResult() {

    var resultString = "Your group will ";

    if(Math.random()>.5)
        resultString = resultString+"wipe on the first boss and refill for 20mins, ";
    else
        resultString = resultString+"get the mechanics perfect, ";

    resultString = resultString+"and ";

    if(Math.random()>.5)
        resultString = resultString+"have group of pumper DPS join, ";
    else
        resultString = resultString+"wait for a tank who got lost in the wrong wing, ";

    resultString = resultString+"and ";

    if(Math.random()>.5)
        resultString = resultString+"one of the healers will be AFK for 10mins.";
    else
        resultString = resultString+"get a great item upgrade.";

    var resultElement = document.getElementById("resultPar");
    resultElement.innerText = resultString;
}