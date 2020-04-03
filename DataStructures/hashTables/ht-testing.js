const { HashTable } = require("./hash-table");
const { restaurants } = require("./restaurants");
const { inspectObject } = require("../logUtils");

let uberEats = new HashTable();

function normalizeObject(restaurants) {
    // adding a code property for those props who does not have one
    restaurants.map((restaurant) => {
        if(!restaurant.hasOwnProperty("code")) {
            let code = restaurant["item"]
                .toLowerCase()
                .split(" ")[0];
            restaurant["code"] = code;
        }

    })
}

// populating uber eats
function populateHashTable(restaurants, ht) {
    normalizeObject(restaurants);

    restaurants.map((restaurant) => {
        let key;
        let placeProps = {};
        for(let prop in restaurant) {
            if(restaurant.hasOwnProperty(prop)) {
                if (!key && prop === 'code') key = restaurant[prop];
                else {
                    // item prop should be capitalized
                    if(prop === 'item')
                        placeProps[prop] = restaurant[prop].toUpperCase();
                    else placeProps[prop] = restaurant[prop];
                }
            }
        }
        // HERE WE CAN POPULATE A HASH TABLE USING KEY AND PROPS
        // inserting elements into the hash table
        ht.set(key, placeProps);
    })
}

console.log(restaurants.length);
populateHashTable(restaurants, uberEats);
inspectObject(uberEats);

console.log(uberEats.get("inner"));
console.log(uberEats.get("donnas"));
console.log(uberEats.get("charles"));
console.log(uberEats.get("chnorth"));
console.log(uberEats.get("ruths"));
console.log(uberEats.get("umbrellacorp")); // undefined element

console.log("----getting the keys ---");
//console.log(uberEats.keys());
console.log("----getting the values ---");
//console.log(uberEats.values());

console.log("--- working with simple structures ---");
let colorsToAdd = [["pink", "A fucking good color"],
    ["blue", "ranger blue is blue"],
    ["black", "orange is the new black"],
    ["white", "#FFFFF"],
    ["red", "red ranger, the leader"],
    ["orange", "#FFFFF"],
    ["orange", "Also a fruit"],
    ["green", "a lovely green pokemon"],
    ["some fucking totally different color looong name", "a color like the others"]];

//inspectObject(colorsToAdd);
let colors = new HashTable();

colorsToAdd.map((color) => {
    colors.set(color[0], color[1]);
})
inspectObject(colors);
console.log(colors.values());
