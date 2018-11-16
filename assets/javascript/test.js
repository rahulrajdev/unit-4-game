var harryPotter = {
    name: "Harry Potter",
    avatar: "assets/images/harrypotter.jpg",
    HP: 550,
    AP: 80,
    CAP: 30
};

var voldemort = {
    name: "Lord Voldemort",
    avatar: "assets/images/voldemort.jpg",
    HP: 560,
    AP: 70,
    CAP: 25
};

var mcgonagall = {
    name: "Minerva Mcgonagall",
    avatar: "assets/images/voldemort.jpg",
    HP: 450,
    AP: 60,
    CAP: 20
}

var snape = {
    name: "Severus Snape",
    avatar: "assets/images/snape.jpg",
    HP: 400,
    AP: 50,
    CAP: 27
};

var harryClickedAsChar = false;
var voldemortClickedAsChar = false;
var mcgonagallClickedAsChar = false;
var snapeClickedAsChar = false;

$("#harrypotterchar").on("click", function () {
    harryClickedAsChar = true;
    $("#voldemortscore").appendTo("#voldemortenemy").css({border: '20px solid red'});
    $("#mcgonagallscore").appendTo("#mcgonagallenemy").css({border: '20px solid red'});
    $("#snapescore").appendTo("#snapeenemy").css({border: '20px solid red'});
});

$("#voldemortchar").on("click", function () {
    voldemortClickedAsChar = true;
    $("#harrypotterscore").appendTo("#harrypotterenemy").css({border: '20px solid red'});
    $("#mcgonagallscore").appendTo("#mcgonagallenemy").css({border: '20px solid red'});
    $("#snapescore").appendTo("#snapeenemy").css({border: '20px solid red'});
});

$("#mcgonagallchar").on("click", function () {
    mcgonagallClickedAsChar = true;
    $("#voldemortscore").appendTo("#voldemortenemy").css({border: '20px solid red'});
    $("#harrypotterscore").appendTo("#harrypotterenemy").css({border: '20px solid red'});
    $("#snapescore").appendTo("#snapeenemy").css({border: '20px solid red'});
});

$("#snapechar").on("click", function () {
    snapeClickedAsChar = true;
    $("#voldemortscore").appendTo("#voldemortenemy").css({border: '20px solid red'});
    $("#mcgonagallscore").appendTo("#mcgonagallenemy").css({border: '20px solid red'});
    $("#harrypotterscore").appendTo("#harrypotterenemy").css({border: '20px solid red'});
});

var harryClickedAsEnemy = false;
var voldemortClickedAsEnemy = false;
var mcgonagallClickedAsEnemy = false;
var snapeClickedAsEnemy = false;

$("#harrypotterenemy").on("click", function () {
    harryClickedAsEnemy = true;
    $("#harrypotterscore").appendTo("#harrypotterdefender").css({border: '20px solid black'});
});

$("#voldemortenemy").on("click", function () {
    voldemortClickedAsEnemy = true;
    $("#voldemortscore").appendTo("#voldemortdefender").css({border: '20px solid black'});
});

$("#mcgonagallenemy").on("click", function () {
    mcgonagallClickedAsEnemy = true;
    $("#mcgonagallscore").appendTo("#mcgonagalldefender").css({border: '20px solid black'});
});

$("#snapeenemy").on("click", function () {
    snapeClickedAsEnemy = true;
    $("#snapescore").appendTo("#snapedefender").css({border: '20px solid black'});
});

$("#fightbuttons").append("<button id='attack'>" + "Attack!" + "</button>");

var attackClicksCount = 0

var harryPotterDefeated = false;
var voldemortDefeated = false;
var mcgonagallDefeated = false;
var snapeDefeated = false;

$("#attack").on("click", function () {
    attackClicksCount++;
    if (harryClickedAsChar && voldemortClickedAsEnemy) {
        harryPotter.HP -= voldemort.CAP;
        harryPotter.AP *= attackClicksCount;
        voldemort.HP -= harryPotter.AP;
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);
        $("#voldemortdisplay").html("Voldemort | HP: " + voldemort.HP);
        $("#attackupdate").html("You attacked Voldemort for " + harryPotter.AP + " points.");
        $("#counterattackupdate").html("Voldemort attacked you for " + voldemort.CAP + " points.");
    } 
    else if (harryClickedAsChar && mcgonagallClickedAsEnemy) {
        harryPotter.HP -= mcgonagall.CAP;
        harryPotter.AP *= attackClicksCount;
        mcgonagall.HP -= harryPotter.AP;
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
    }
    else if (harryClickedAsChar && snapeClickedAsEnemy) {
        harryPotter.HP -= snape.CAP;
        harryPotter.AP *= attackClicksCount;
        snape.HP -= harryPotter.AP;
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);
        $("#snapedisplay").html("Snape | HP: " + snape.HP);
    }
    else if (voldemortClickedAsChar && harryClickedAsEnemy) {
        voldemort.HP -= harryPotter.CAP;
        voldemort.AP *= attackClicksCount;
        harryPotter.HP -= voldemort.AP;
        $("#voldemortdisplay").html("Voldemort | HP: " + voldemort.HP);
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);
    }
    else if (voldemortClickedAsChar && mcgonagallClickedAsEnemy) {
        voldemort.HP -= mcgonagall.CAP;
        voldemort.AP *= attackClicksCount;
        mcgonagall.HP -= voldemort.AP;
        $("#voldemortdisplay").html("Voldemort | HP: " + voldemort.HP);
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
    }
    else if (voldemortClickedAsChar && snapeClickedAsEnemy) {
        voldemort.HP -= snape.CAP;
        voldemort.AP *= attackClicksCount;
        snape.HP -= voldemort.AP;
        $("#voldemortdisplay").html("Voldemort | HP: " + harryPotter.HP);
        $("#snapedisplay").html("Snape | HP: " + snape.HP);
    }
    else if (mcgonagallClickedAsChar && harryClickedAsEnemy) {
        mcgonagall.HP -= harryPotter.CAP;
        mcgonagall.AP *= attackClicksCount;
        harryPotter.HP -= mcgonagall.AP;
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);

    }
    else if (mcgonagallClickedAsChar && voldemortClickedAsEnemy) {

        mcgonagall.HP -= voldemort.CAP;
        mcgonagall.AP *= attackClicksCount;
        voldemort.HP -= mcgonagall.AP;
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
        $("#voldemortdisplay").html("Voldemort | HP: " + voldemort.HP);
    }
    else if (mcgonagallClickedAsChar && snapeClickedAsEnemy) {

        mcgonagall.HP -= snape.CAP;
        mcgonagall.AP *= attackClicksCount;
        snape.HP -= mcgonagall.AP;
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
        $("#snapedisplay").html("Snape | HP: " + snape.HP);

    }
    else if (snapeClickedAsChar && harryClickedAsEnemy) {

        snape.HP -= harryPotter.CAP;
        snape.AP *= attackClicksCount;
        harryPotter.HP -= snape.AP;
        $("#snapedisplay").html("Snape | HP: " + snape.HP);
        $("#harrypotterdisplay").html("Harry Potter | HP: " + harryPotter.HP);
    }
    else if (snapeClickedAsChar && voldemortClickedAsEnemy) {

        snape.HP -= voldemort.CAP;
        snape.AP *= attackClicksCount;
        voldemort.HP -= snape.AP;
        $("#snapedisplay").html("Snape | HP: " + snape.HP);
        $("#voldemortdisplay").html("Voldemort | HP: " + voldemort.HP);
    }
    else if (snapeClickedAsChar && mcgonagallClickedAsEnemy) {

        snape.HP -= mcgonagall.CAP;
        snape.AP *= attackClicksCount;
        mcgonagall.HP -= snape.AP;
        $("#snapedisplay").html("Snape | HP: " + snape.HP);
        $("#mcgonagalldisplay").html("Mcgonagall | HP: " + mcgonagall.HP);
    }

    if ((harryPotter.HP <= 0) && harryClickedAsChar) {
        alert("Sorry! Your Lost reload the page to play again!");
    }
    else if ((voldemort.HP <= 0) && voldemortClickedAsChar) {
        alert("Sorry! Your Lost reload the page to play again!");
    }
    else if ((mcgonagall.HP <= 0) && mcgonagallClickedAsChar) {
        alert("Sorry! Your Lost reload the page to play again!");
    }
    else if ((snape.HP <= 0) && snapeClickedAsChar) {
        alert("Sorry! Your Lost reload the page to play again!");
    };

    if ((harryPotter.HP <= 0) && harryClickedAsEnemy) {
        harryClickedAsEnemy = false;
        harryPotterDefeated = true;
        alert("Great Job! Choose  another opponenen!");
        $("#harrypotterdefender").hide();
    }
    else if ((voldemort.HP <= 0) && voldemortClickedAsEnemy) {
        voldemortClickedAsEnemy = false;
        voldemortDefeated = true;
        alert("Great Job! Choose another opponent");
        $("#voldemortdefender").hide();
    }
    else if ((mcgonagall.HP <= 0) && mcgonagallClickedAsEnemy) {
        mcgonagallClickedAsEnemy = false;
        mcgonagallDefeated = true;
        alert("great");
        $("#mcgonagalldefender").hide();
    }
    else if ((snape.HP <= 0) && snapeClickedAsEnemy) {
        snapeClickedAsEnemy = false;
        snapeDefeated = true;
        alert("GREAT");
        $("#snapedefender").hide();
    };

    if (voldemortDefeated && mcgonagallDefeated && snapeDefeated) {
        alert("Great Job! You defeeated all!");
    } 
    else if (harryPotterDefeated && mcgonagallDefeated && snapeDefeated) {
        alert("Great Job! You defeeated all!");

    } 
    else if(harryPotterDefeated && voldemortDefeated && snapeDefeated) {
        alert("Great Job! You defeeated all!");

    }
    else if (harryPotterDefeated && voldemortDefeated && mcgonagallDefeated) {
        alert("Great Job! You defeeated all!");

    }
});


