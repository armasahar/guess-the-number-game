import rl from "readline-sync";
import { addToLeaderboard, printLeaderboard } from './leaderboard.js';

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
    let target_number = random_number(1, 100);
    let max_attempts = 10;
    let Player_name = rl.question("Enter your Name: ");
    let used_attempts = 0;
    let left_attempts = max_attempts;

    while (used_attempts < max_attempts) {
        let Guess_number = rl.questionInt("Take a Guess: ");
        used_attempts++;
        left_attempts = max_attempts - used_attempts;

        if (Guess_number === target_number) {
            console.log(`\n🎉 Congrats ${Player_name}, you guessed the right number in ${used_attempts} guesses!\n`);
            break;
        } else if (Guess_number < target_number) {
            console.log(`Too low! You have ${left_attempts} attempts left.`);
        } else {
            console.log(`Too high! You have ${left_attempts} attempts left.`);
        }
    }
    if (left_attempts === 0) {
        console.log(`\nGAME OVER! Sorry ${Player_name}, the correct number was ${target_number}\n`);
    } 

    addToLeaderboard(Player_name, left_attempts);
}

game();

while (true) {
    const play = rl.keyInYN("Do you want to play again?");
    if (play) {
        game();
    } else {
        setTimeout(() => {
            printLeaderboard();
        }, 2000);
        break;
    }
}
