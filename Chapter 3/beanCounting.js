function countBs(string){

    let numBs = 0;

    for (let count = 0; count < string.length; count ++){

        if (string[count] === "B"){

            numBs++

        }

    }

    return numBs;

}

function countChar(string, character){

    let numChar = 0;

    for (let count = 0; count < string.length; count ++){

        if (string[count] === character){

            numChar++

        }

    }

    return numChar;

}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));