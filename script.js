const Button = document.getElementById("roll-button");
const Score = document.getElementById("score");
const Message = document.getElementById("message");
const ImageInsert = document.getElementById("image-div");
const RestartButton = document.getElementById("restart-button");

let dice1Image = document.createElement("img");
dice1Image.src = "img/dice1.png";
let dice2Image = document.createElement("img");
dice2Image.src = "img/dice2.png";
let dice3Image = document.createElement("img");
dice3Image.src = "img/dice3.png";
let dice4Image = document.createElement("img");
dice4Image.src = "img/dice4.png";
let dice5Image = document.createElement("img");
dice5Image.src = "img/dice5.png";
let dice6Image = document.createElement("img");
dice6Image.src = "img/dice6.png";


    Button.addEventListener("click", () => {
        let randomNumber = Math.floor(Math.random() * (6) + 1);
        console.log("The new random number is: " + randomNumber);
        Message.innerHTML = "";
        ImageInsert.innerHTML = "";
        RestartButton.innerHTML = "";
    
        
        
    
        if (randomNumber == 1) {
            console.log("You Lose - You rolled a 1");
    
            Message.innerHTML = "You Lose - you rolled a 1";
            ImageInsert.appendChild(dice1Image);

            // Button.innerHTML = "";
    
            // Create button
            let restartButton = document.createElement("button");
            restartButton.innerHTML = "Restart";
            // Append Button
            RestartButton.appendChild(restartButton);
    
            RestartButton.addEventListener("click", () => {
                RestartButton.innerHTML = "";
                ResetFunction();
            })
    
            score = 0;
            randomNumber = 0;
        }
    
        // Dislays the pictures
        if (randomNumber == 2) {
            ImageInsert.appendChild(dice2Image);
        };
        if (randomNumber == 3) {
            ImageInsert.appendChild(dice3Image);
        };
        if (randomNumber == 4) {
            ImageInsert.appendChild(dice4Image);
        }
        if (randomNumber == 5) {
            ImageInsert.appendChild(dice5Image);
        }
        if (randomNumber == 6) {
            ImageInsert.appendChild(dice6Image);
        }
    
    
        if (score < 20) {
            Score.innerHTML = score+=randomNumber;
            console.log(score);
    
            if (score >= 20) {
                Message.innerHTML = "You Won!";
    
            
            // Create button
            let restartButton = document.createElement("button");
            restartButton.innerHTML = "Restart";
            // Append Button
            RestartButton.appendChild(restartButton);
    
            RestartButton.addEventListener("click", () => {
                RestartButton.innerHTML = "";
                ResetFunction();
            })
    
                score = 0;
                randomNumber = 0;
            }
        }
    });

    function ResetFunction() {
        let Button = document.createElement("button");
        Button.innerHTML = "Roll";
        Message.innerHTML = "";
        ImageInsert.innerHTML = "";
        score = 0;
        randomNumber = 0;
    }

