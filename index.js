// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    // array => invoking the push methond on the array => passing the name as an argument
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}


function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats,name];
    return newCats;
} 

function prependCat(name) {
    const oldCats = [name,...cats];
    return oldCats;
}

function removeLastCat() {
   const deadNewCats = cats.slice(0,-1);
   return deadNewCats;
}

function removeFirstCat() {
    const deadOldCats = cats.slice(1);
    return deadOldCats;
}

