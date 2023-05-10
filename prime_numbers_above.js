let int = +prompt("enter number");
let next = true;

nextInt:for(;next;int++){
    
    for(let test = 2;test < int; test++){
                    
            if(int % test == 0)continue nextInt;   // not a prime, move on to next int, skip the next step.
    }
    next =(confirm(`${int} is a prime number!`));  // if not confirmed "next" becomes false.
                        
}
            
alert("canceled");