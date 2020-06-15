function min(a,b){
    if (a < b) {
        return a;
    }
    else if (b < a) {
        return b;
    }
    else {
        return(`${a} and ${b} are equal.`);
    }
};

console.log(min(0, 10));

console.log(min(0, -10));

console.log(min(5, 5));