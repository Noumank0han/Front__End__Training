function greet (name, greettext = "Greetings from JS"){ //default value of greettext if no value is given
    console.log(greettext + " " + name);
    console.log(name + " is a good person");
}

function sum (a, b, c){
    d = a + b + c;
    return d;
    console.log("The function is returned co cannot perform any thing else")
}

function NumCheck (a, b){
    if(a > b){
        console.log(a + " is greater than " + b);
    }
    else if (a == b){
        console.log(a + " is equal to " + b);
        
    }
    else{
        console.log(a + " is less than " + b);
        
    }
}

let greettext1 = "Good Morning";
let name = "Nouman";
let name1 = "Saqib";
let name2 = "Shams";
let name3 = "Mohsin";
console.log(name);
greet(name, greettext1);
greet(name2, greettext1);
greet(name3, greettext1);
greet(name1);

let returnValue = sum (1, 2, 3);
console.log (returnValue);

NumCheck(2, 2);