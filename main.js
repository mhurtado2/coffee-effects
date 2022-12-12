const coffees = [
    "light colombian roast", "hawaiian dark roast", "guatemalan blend medium roast",
    "dark madagascar blend", "jamaican dark blue", "jamaican medium roast",
    "salvador robusto light"
]

let output = ""

/*
let lightRoast = coffees[0]
let lightRoastTwo = coffees[6]
let medRoast = coffees[2]
let medRoastTwo = coffees[5]
let darkRoast = coffees[1]
let darkRoastTwo = coffees[3]
let darkRoastThree = coffees[4]
*/

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${coffee} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${coffee} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${coffee} and add cream and sugar`
    }
    output += "\n"
}

console.log(output)

/*

let lightRoast = coffees[0]
let lightRoastTwo = coffees[6]

let medRoast = coffees[2]
let medRoastTwo = coffees[5]

let darkRoast = coffees[1]
let darkRoastTwo = coffees[3]
let darkRoastThree = coffees[4]

for (const coffee of coffees) {
    if (coffee.includes("light")) {
        output += `I'll have the ${lightRoast} or ${lightRoastTwo} and drink it black`
    }
    else if (coffee.includes("medium")) {
        output += `I'll have the ${medRoast} or ${medRoastTwo} and add cream only`
    }
    else if (coffee.includes("dark")) {
        output += `I'll have the ${darkRoast} or ${darkRoastTwo} or ${darkRoastThree} and add cream and sugar`
    }
    output += "\n"
}


When you run the code, your output should follow these rules. The xxx should be the name of the coffee.

For light roast, output

"I'll have the xxx and drink it black"

For medium roast, output

"I'll have the xxx and add cream only"

For dark roast, output

"I'll have the xxx and add cream and sugar"

*/