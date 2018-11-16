//Creating all characters as objects
var harry = {
    name: "Harry",
    HP: 200,
    AP: 15,
    CAP: 10
};

var voldemort = {
    name: "Voldemort",
    HP: 190,
    AP: 17,
    CAP: 12
};

var mcgonagall = {
    name: "Mcgonagall",
    HP: 185,
    AP: 14,
    CAP: 9
};

var snape = {
    name: "Snape",
    HP: 195,
    AP: 16,
    CAP: 11
};

// declaring variables that indicate when a character is chosen as a player or enemy
var harryAsChar = false;
var voldemortAsChar = false;
var mcgonagallAsChar = false;
var snapeAsChar = false;

var harryAsEnemy = false;
var voldemortAsEnemy = false;
var mcgonagallAsEnemy = false;
var snapeAsEnemy = false;

//initial game conditions

    $("#harrypotterenemy").css("visibility", "hidden");
    $("#voldemortenemy").css("visibility", "hidden");
    $("#mcgonagallenemy").css("visibility", "hidden");
    $("#snapeenemy").css("visibility", "hidden");
    $("#harrypotteropp").css("visibility", "hidden");
    $("#voldemortopp").css("visibility", "hidden");
    $("#mcgonagallopp").css("visibility", "hidden");
    $("#snapeopp").css("visibility", "hidden");
    $("#harryhp").hide();
    $("#voldemorthp").hide();
    $("#mcgonagallhp").hide();
    $("#snapehp").hide();

//all game headers/buttons are hidden so user is led through a sequence of events
    
    $("#chooseyourcharacter").hide();
    $("#chooseyouropponent").hide();
    $("#fightyouropponent").hide();
    $("#attack").hide();
    $("#restartgame").hide();

$("#startbutton").on("click", function() {
    $("#chooseyourcharacter").show();
    $("#harryhp").show();
    $("#voldemorthp").show();
    $("#mcgonagallhp").show();
    $("#snapehp").show();

});

/* parameters: otherCharHide1,2 and 3 are the characters the user has not chosen as their own. These will be hidden and the same 
characters (now potential enemies) will shown in the row below.*/

function clickedAsChar (otherCharHide1, otherCharHide2, otherCharHide3, enemyShow1, enemyShow2, enemyShow3) {
    $(otherCharHide1).css("visibility", "hidden");
    $(otherCharHide2).css("visibility", "hidden");
    $(otherCharHide3).css("visibility", "hidden");
    $(enemyShow1).css("visibility", "visible");
    $(enemyShow2).css("visibility", "visible");
    $(enemyShow3).css("visibility", "visible");
    $("#chooseyouropponent").show();
};

/* executing clickAsChar() and appending characters to correct locations when clicked. 
The opacity here as well as in the next functions are used to blur/unblur the characters display points in response to whether the user has
clicked them. So, if a user clicks "Harry" as a character, Harry's point display will remain as is, but the other players will be blurred out. If the user
then picks "Voldemort" as an enemy, Voldemort's point display will return to an opacity of 1, while others' will remain as is.
*/

$("#harrypotterchar").on("click", function () {
    harryAsChar = true;
    clickedAsChar ("#voldemortchar", "#mcgonagallchar", "#snapechar", "#voldemortenemy", "#mcgonagallenemy", "#snapeenemy");
    $("#voldemorthp").css("opacity", ".3");
    $("#mcgonagallhp").css("opacity", ".3");
    $("#snapehp").css("opacity", ".3");
});

$("#voldemortchar").on("click", function () {
    voldemortAsChar = true;
    clickedAsChar ("#harrypotterchar", "#mcgonagallchar", "#snapechar", "#harrypotterenemy", "#mcgonagallenemy", "#snapeenemy");
    $("#harryhp").css("opacity", ".3");
    $("#mcgonagallhp").css("opacity", ".3");
    $("#snapehp").css("opacity", ".3");
});

$("#mcgonagallchar").on("click", function () {
    mcgonagallAsChar = true;
    clickedAsChar ("#harrypotterchar", "#voldemortchar", "#snapechar", "#harrypotterenemy", "#voldemortenemy", "#snapeenemy");
    $("#harryhp").css("opacity", ".3");
    $("#voldemorthp").css("opacity", ".3");
    $("#snapehp").css("opacity", ".3");
});

$("#snapechar").on("click", function () {
    snapeAsChar = true;
    clickedAsChar ("#harrypotterchar", "#voldemortchar", "#mcgonagallchar", "#harrypotterenemy", "#voldemortenemy", "#mcgonagallenemy");
    $("#harryhp").css("opacity", ".3");
    $("#voldemorthp").css("opacity", ".3");
    $("#mcgonagallhp").css("opacity", ".3");
});

/* the user picks one enemy and when this is done, the enemy is moved in to the row below. I hide the second row enemy and show
it in the third row.*/

function clickedAsEnemy (enemyChosenHide, enemyChosenShow) {
    $(enemyChosenHide).css("visibility", "hidden");
    $(enemyChosenShow).css("visibility", "visible");
    $("#fightyouropponent").show();
    $("#charAttackOnEnemyUpdate").empty();
    $("#enemyAttackOnCharUpdate").empty();
    $("#defeatEnemy").empty();
    $("#attack").show();
}

$("#harrypotterenemy").on("click", function() {
    harryAsEnemy = true;
    clickedAsEnemy("#harrypotterenemy", "#harrypotteropp");
    $("#harryhp").css("opacity", "1");
});

$("#voldemortenemy").on("click", function() {
    voldemortAsEnemy = true;
    clickedAsEnemy("#voldemortenemy", "#voldemortopp");
    $("#voldemorthp").css("opacity", "1");
});

$("#mcgonagallenemy").on("click", function() {
    mcgonagallAsEnemy = true;
    clickedAsEnemy("#mcgonagallenemy", "#mcgonagallopp");
    $("#mcgonagallhp").css("opacity", "1");
});

$("#snapeenemy").on("click", function() {
    snapeAsEnemy = true;
    clickedAsEnemy("#snapeenemy", "#snapeopp");
    $("#snapehp").css("opacity", "1");
});

// var to keep track of clicks count because attack power increases by how many times attack button was clicked
var attackClicksCount = 0

// var to keep track of how many characters have been defeated so game will end accordingly
var defeatsToGo = 3;

//function to take away points as necessary after "attack" button is clicked and display to user
function fighting(char, enemy) {
    char.HP -= enemy.CAP;
    enemy.HP -= char.AP * attackClicksCount;
    $("#charAttackOnEnemyUpdate").html("You attacked " + enemy.name + " for " + (char.AP * attackClicksCount) + " points! ");
    $("#enemyAttackOnCharUpdate").html(enemy.name + " attacked you for " + enemy.CAP + " points!");
}

// if else statement to show new character point updates to user at top of screen 
$("#attackbutton").on("click", function (){
    attackClicksCount++;
    if (harryAsChar && voldemortAsEnemy) {
        fighting(harry, voldemort);
        $("#harryhp").html("Harry: " + harry.HP);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
    } else if (harryAsChar && mcgonagallAsEnemy) {
        fighting(harry, mcgonagall);
        $("#harryhp").html("Harry: " + harry.HP);
        $("#mcgonagallhp").html("Mcgonagall: " + mcgonagall.HP);
    } else if (harryAsChar && snapeAsEnemy) {
        fighting(harry, snape);
        $("#harryhp").html("Harry: " + harry.HP);
        $("#snapehp").html("Snape: " + snape.HP);
    } else if (voldemortAsChar && harryAsEnemy) {
        fighting(voldemort, harry);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
        $("#harryhp").html("Harry: " + harry.HP);
    } else if (voldemortAsChar && mcgonagallAsEnemy) {
        fighting(voldemort, mcgonagall);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
        $("#mcgonagallhp").html("Mcgonagall: " + mcgonagall.HP);
    } else if (voldemortAsChar && snapeAsEnemy) {
        fighting(voldemort, snape);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
        $("#snapehp").html("Snape: " + snape.HP);
    } else if (mcgonagallAsChar && harryAsEnemy) {
        fighting(mcgonagall, harry);
        $("#mcgonagallhp").html("Mcgonagall: " + mcgonagall.HP);
        $("#harryhp").html("Harry: " + harry.HP);
    } else if (mcgonagallAsChar && voldemortAsEnemy) {
        fighting(mcgonagall, voldemort);
        $("#mcgonagallhp").html("Mcgonagall: " + mcgonagall.HP);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
    } else if (mcgonagallAsChar && snapeAsEnemy) {
        fighting(mcgonagall, snape);
        $("#mcgonagalllhp").html("Mcgonagall: " + mcgonagall.HP);
        $("#snapehp").html("Snape: " + snape.HP);
    } else if (snapeAsChar && harryAsEnemy) {
        fighting(snape, harry);
        $("#snapehp").html("Snape: " + snape.HP);
        $("#harryhp").html("Harry: " + harry.HP);
    } else if (snapeAsChar && voldemortAsEnemy) {
        fighting(snape, voldemort);
        $("#snapehp").html("Snape: " + snape.HP);
        $("#voldemorthp").html("Voldemort: " + voldemort.HP);
    } else if (snapeAsChar && mcgonagallAsEnemy) {
        fighting(snape, mcgonagall);
        $("#snapehp").html("Snape: " + snape.HP);
        $("#mcgonagallhp").html("Mcgonagall: " + mcgonagall.HP);
    }

    //events that occur when either the user loses or they defeat their enemies
    if (harryAsChar && harry.HP <= 0) {
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#attack").hide();
        $("#harryhp").css("opacity", ".3");
        $("#winOrLoseUpdate").html("Sorry Harry...you lose....push RESTART to play again!");
        $("#restartgame").show();
        $("#restartbutton").on("click", function() {
            window.location.reload();
        })
    } else if (voldemortAsChar && voldemort.HP <= 0) {
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#attack").hide();
        $("#voldemorthp").css("opacity", ".3");
        $("#winOrLoseUpdate").html("Sorry Voldemort...you lose....push RESTART to play again!");
        $("#restartgame").show();
        $("#restartbutton").on("click", function() {
            window.location.reload();
        })
    } else if (mcgonagallAsChar && mcgonagall.HP <= 0) {
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#attack").hide();
        $("#mcgonagallhp").css("opacity", ".3");
        $("#winOrLoseUpdate").html("Sorry Mcgonagall...you lose....push RESTART to play again!");
        $("#restartgame").show();
        $("#restartbutton").on("click", function() {
            window.location.reload();
        })
    } else if (snapeAsChar && snape.HP <= 0) {
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#attack").hide();
        $("#snapehp").css("opacity", ".3");
        $("#winOrLoseUpdate").html("Sorry Snape...you lose....push RESTART to play again!");
        $("#restartgame").show();
        $("#restartbutton").on("click", function() {
            window.location.reload();
        })
    } else if (harryAsEnemy && harry.HP <= 0) {
        harryAsEnemy = false;
        defeatsToGo--;
        $("#attack").hide();
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#harryhp").css("opacity", ".3");
        $("#harrypotteropp").css("opacity", "0");
        if (defeatsToGo === 1) {
            $("#defeatEnemy").html("You defeated Harry! Pick " + defeatsToGo + " more opponent!");
        } else if (defeatsToGo > 1) {
            $("#defeatEnemy").html("You defeated Harry! Pick another opponent!");
        }
    } else if (voldemortAsEnemy && voldemort.HP <= 0) {
        voldemortAsEnemy = false;
        defeatsToGo--;
        $("#attack").hide();
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#voldemorthp").css("opacity", ".3");
        $("#voldemortopp").css("opacity", "0");
        if (defeatsToGo === 1) {
            $("#defeatEnemy").html("You defeated Voldemort! Pick " + defeatsToGo + " more opponent!");
        } else if (defeatsToGo > 1) {
            $("#defeatEnemy").html("You defeated Voldemort! Pick another opponent!");
        }
    } else if (mcgonagallAsEnemy && mcgonagall.HP <= 0) {
        mcgonagallAsEnemy = false;
        defeatsToGo--;
        $("#attack").hide();
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#mcgonagallhp").css("opacity", ".3");
        $("#mcgonagallopp").css("opacity", "0");
        if (defeatsToGo === 1) {
            $("#defeatEnemy").html("You defeated Mcgonagall! Pick " + defeatsToGo + " more opponent!");
        } else if (defeatsToGo > 1) {
            $("#defeatEnemy").html("You defeated Mcgonagall! Pick another opponent!");
        }
    } else if (snapeAsEnemy && snape.HP <= 0) {
        snapeAsEnemy = false;
        defeatsToGo--;
        $("#attack").hide();
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#snapehp").css("opacity", ".3");
        $("#snapeopp").css("opacity", "0");
        if (defeatsToGo === 1) {
            $("#defeatEnemy").html("You defeated Snape! Pick " + defeatsToGo + " more opponent!");
        } else if (defeatsToGo > 1) {
            $("#defeatEnemy").html("You defeated Snape! Pick another opponent!");
        }
    }

    //events when user wins game or when defeatsToGo equals zero
    if (defeatsToGo === 0) {
        $("#charAttackOnEnemyUpdate").empty();
        $("#enemyAttackOnCharUpdate").empty();
        $("#charpointcount").empty();
        $("#enemypointcount").empty();
        $("#defeatEnemy").empty();
        $("#winOrLoseUpdate").html("YOU WIN!!!! Press RESTART to play again!");
        $("#attack").hide();
        $("#restartgame").show();
        $("#restartbutton").on("click", function () {
            window.location.reload();
        });
    }
});



