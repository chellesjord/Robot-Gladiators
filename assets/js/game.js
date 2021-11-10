var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

///you can also log multiple values at once like this console.long(playerName, playerAttack, playerHealth);
var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//enemyNames array
console.log(enemyNames.length);
for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function (enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;

        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining `); // Template literal

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playeHealth variable.
        playerHealth = playerHealth - enemyAttack;

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {

        //confirm player wants to skip
        var confrimSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confrimSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

//for fight loop
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}


//Game states
//"WIN"- Player robot has defeated all enemy-robots
// *fight all enemy-robots