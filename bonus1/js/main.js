const container = document.getElementById("container");


for ( let i = 1; i <= 100; i++) {

    if(i % 5 == 0 && i % 3 == 0 ){

        const box = document.createElement("div");
        box.append("FizzBuzz");
        box.className = "fizzbuzz";
        container.append(box);

    } else if ( i % 3 == 0 ){

        const box = document.createElement("div");
        box.append("Fizz");
        box.className = "fizz";
        container.append(box);


    }else if ( i % 5 == 0 ){

        const box = document.createElement("div");
        box.append("Buzz");
        box.className = "buzz";
        container.append(box);

    }else{

        const box = document.createElement("div");
        box.append(i);
        box.className = "box";
        container.append(box);   
     }
}