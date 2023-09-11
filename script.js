var score =0;
            var count =0;
           document.getElementById("guess1").onclick = function(){
                
                var randomNumberChoosed = 1;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    // alert("You got it!") 
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;
                }
                else{
                    // alert("The number was " + randomNumber)
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                    
                }
           }


           document.getElementById("guess0").onclick = function(){
                
                var randomNumberChoosed = 0;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;                }
                else{
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                }
           }


           document.getElementById("guess2").onclick = function(){
                
                var randomNumberChoosed = 2;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;                }
                else{
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                }
           }

           document.getElementById("guess3").onclick = function(){
                
                var randomNumberChoosed = 3;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;                }
                else{
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                }
           }


           document.getElementById("guess4").onclick = function(){
                
                var randomNumberChoosed = 4;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;                     
                
                }
                else{
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                }
           }


           document.getElementById("guess5").onclick = function(){
                
                var randomNumberChoosed = 5;

                var randomNumber = (Math.floor(Math.random() *6));
                count++
                if(randomNumberChoosed==randomNumber)
                {
                    score++;
                    document.getElementById("oops").innerHTML ="You got it! ";
                    document.getElementById("yourscore").innerHTML ="Your score : " + score;                     
                
                }
                else{
                    document.getElementById("oops").innerHTML ="Oops! The number was " + randomNumber;
                }
           }


           document.getElementById("luck").onclick = function(){
            var percentage = 0;
            percentage=(score/count)*100
            if(isNaN(percentage))
            alert("Your luck % is : 0. Please start the game! ");
            else
            alert("Your luck % is : "+ percentage.toPrecision(3)+ "%");
           }