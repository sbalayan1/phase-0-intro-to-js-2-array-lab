// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat(name) {
    cats.push(name);
}

destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

destructivelyPrependCat('Arthur');

function destructivelyRemoveLastCat() {
    cats.pop();
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}

destructivelyRemoveFirstCat();

function appendCat(name) {
    const newCats = [...cats,name];
    return newCats;
} 

appendCat('Dog');


function prependCat(name) {
    const oldCats = [name,...cats];
    return oldCats;
}

prependCat('Onyx');

function removeLastCat() {
   const deadNewCats = cats.slice(0,-1);
   return deadNewCats;
}


function removeFirstCat() {
    const deadOldCats = cats.slice(1);
    return deadOldCats;
}

