// we will implement a hash table using an array
// in order to look up valuse by key, we need a way to convert keys into vald array
// indices
// a function that performs this task is called a hash function.

// SPOILER ALERT: It is just a naive too simple hash function. Not a well implemented one.
const hashFuction = (color) => {
    let colorAscii = [];
    for (let colorElement of color) {
        colorAscii.push(colorElement.charCodeAt(0));
    }

    let sum = colorAscii.reduce((acc, ascii) => {
        acc += ascii;
        return acc;
    })
    return sum;
}

//still part of the hash function-
const convertsToIndex = (color, capacity) => {
    let element = hashFuction(color);
    return element % capacity;
}

// verifying if element at index i contains a list of more elements due to
// hash function collision handler
const hashTableGetElementByKey = (color, capacity, hashTable) => {
    // accessing throug converting the color key into a index thanks to
    // hash function
    let elements = hashTable[convertsToIndex(color, capacity)];
    //due to collision avoidance handler
    let elementToReturn;
    // linear in time
    elements.forEach((element) => {
        if(element[0] == color) {
            elementToReturn = element;
        }
    })
    return elementToReturn;
}

let colorsToAdd = [["pink", "A fucking good color"],
    ["blue", "ranger blue is blue"],
    ["black", "orange is the new black"],
    ["white", "peace and cleareness"],
    ["red", "red ranger, the leader"],
    ["orange", "It is a fruit either"],
    ["green", "a lovely green pokemon"],
    ["some fucking totally different color looong name", "a color like the others"]];


let colorsHashTable = Array.from({length: 10}, () => []);

let htlen = colorsHashTable.length;
colorsToAdd.forEach((color) => {
    // color[0] will be the key
    let index = convertsToIndex(color[0], htlen);
    // appending the element within a list as Collision handler(chaining)
    colorsHashTable[index].push(color)
})
// this is how a hash table based on chaining collision handler looks like
console.log("color hash table is: ");
console.log(colorsHashTable);

console.log("colors found are here: ");
console.log(hashTableGetElementByKey("red", 10, colorsHashTable));
console.log(hashTableGetElementByKey("pink", 10, colorsHashTable));




