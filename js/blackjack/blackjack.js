$( document ).ready(function() {
    $('#submit').click(function() {
        var pc1 = $('#userCard1').val();
        var pc2 = $('#userCard2').val();
        var dc = $('#dealerCard1').val();

        if (pc1 == pc2) {
            $('#result').html("<strong>" + convertToWord(checkPair(pc1, dc)) + "</strong>");
        } else if (pc1 == "A" || pc2 == "A") {
            var card =  pc1 == "A" ? pc2 : pc1;
            $('#result').html("<strong>" + convertToWord(checkSoftCard(card, dc)) + "</strong>");
        } else {
            $('#result').html("<strong>" + convertToWord(checkHardCard(pc1, pc2, dc)) + "</strong>");
        }
    });

});

function checkPair(userCard, dealerCard) {
    if (userCard == "A" || userCard == "8") {
        return "SP";
    } else if (userCard == "10") {
        return "S";
    } else if (userCard == "9") {
        if (dealerCard == "A" || dealerCard == "10" || dealerCard == "7") {
            return "S";
        }
        return "SP";
    } else if (userCard == "7") {
        if (dealerCard == "A" || dealerCard == "10" || dealerCard == "9") {
            return "H";
        }
        return "SP";
    } else if (userCard == "6" || userCard == "3" || userCard == "2") {
        if (dealerCard == "A" || dealerCard == "10" || dealerCard == "9" || dealerCard == "8") {
            return "H";
        }
        return "SP";
    } else if (userCard == "5") {
        if (dealerCard == "A" || dealerCard == "10") {
            return "H";
        }
        return "D";
    } else {
        if (dealerCard == "5" || dealerCard == "6") {
            return "SP";
        }
        return "H";
    }
}

function checkSoftCard(userCard, dealerCard) {
    if (userCard == "10" || userCard == "9") {
        return "S";
    } else if (userCard == "8") {
        if (dealerCard == "6") {
            return "D/S";
        }
        return "S";
    } else if (userCard == "7") {
        if (dealerCard == "A" || dealerCard == "10" || dealerCard == "9") {
            return "H";
        }
        else if (dealerCard == "8" || dealerCard == "7") {
            return "S";
        }
        return "D/S";
    } else if (userCard == "6") {
        if (dealerCard == "6" || dealerCard == "5" || dealerCard == "4" || dealerCard == "3") {
            return "D";
        }
        return "H";
    } else if (userCard == "5" || userCard == "4" || userCard == "3") {
        if (dealerCard == "6" || dealerCard == "5" || dealerCard == "4") {
            return "D";
        }
        return "H";
    } else {
        if (dealerCard == "6" || dealerCard == "5") {
            return "D";
        }
        return "H";
    }
}

function checkHardCard(userCard1, userCard2, dealerCard) {
    uc1 = parseInt(userCard1);
    uc2 = parseInt(userCard2);
    userHand = uc1 + uc2;
    if (dealerCard == "A") {
        dealerCard = 11;
    } else {
        dealerCard = parseInt(dealerCard);
    }

    if (userHand >= 17) {
        return "S";
    } else if (userHand >= 13) {
        if (dealerCard <= 6) {
            return "S";
        }
        return "H";
    } else if (userHand == 12) {
        if (dealerCard >= 4 && dealerCard <= 6) {
            return "S";
        }
        return "H";
    } else if (userHand == 11 ) {
        if (dealerCard == 11) {
            return "H";
        }
        return "D";
    } else if (userHand == 10) {
        if (dealerCard >= 10) {
            return "H";
        }
        return "D";
    } else if (userHand == 9) {
        if (dealerCard >= 7) {
            return "H";
        }
        return "D";
    }
    return "H";
}

function convertToWord(short)
{
    if(short == "H")
    {
        $("#result").removeClass();
        $("#result").addClass("hit");
        return "Hit";
    }
    else if(short == "S")
    {
        $("#result").removeClass();
        $("#result").addClass("stand");
        return "Stand";}
    else if(short == "SP")
    {
        $("#result").removeClass();
        $("#result").addClass("split");
        return "Split";}
    else if(short == "D")
    {
        $("#result").removeClass();
        $("#result").addClass("double");
        return "Double";}

    else if(short == "D/S")
    {
        $("#result").removeClass();
        $("#result").addClass("doubleStand");
        return "Double if possible, otherwise Stand";}
    else
    {
        $("#result").removeClass();
        return "Invalid"}
}