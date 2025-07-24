import rl from "readline-sync";

function random_number(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function game(){
    let target_number = random_number(1,100);
    let max_attempts = 10; 
    let Player_name = rl.question("Enter your Name: ");
    let left_attempts;
    let used_attempts = 0;
    
    while(1){
        let Guess_number = rl.questionInt("Take a Guess: ");
        used_attempts++;
        left_attempts = max_attempts - used_attempts;
        
        if(Guess_number == target_number){
            console.log(`Congrats ${Player_name}, you have guessed the right number within, ${used_attempts} Guess`)
            break;
        }
        else if(Guess_number < target_number){
            console.log(`Too low, You are left with ${left_attempts} guesses`);
        }
        else if(Guess_number > target_number){
            console.log(`Too high, you are left with ${left_attempts} guesses`);
        }

    }
    console.log(`Sorry ${Player_name}, you've reached your attempt limit. the number was ${target_number}`)

    // return max_attempts;
}

game();