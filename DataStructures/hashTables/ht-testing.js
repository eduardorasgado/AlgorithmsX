const { HashTable } = require("./hash-table");
const { restaurants } = require("./restaurants");

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
        console.log(placeProps);
        // HERE WE CAN POPULATE A HASH TABLE USING KEY AND PROPS
        //ht.set(key, placeProps);
    })
}

console.log(restaurants.length);
populateHashTable(restaurants, uberEats);
