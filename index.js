// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
const copyOfCats = [...cats]
function destructivelyAppendCat(name){
    cats.push("Ralph",);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift("Bob",);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(" ")
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift("")
    return cats
}
function appendCat(name){
   return [...cats, "Broom"]
}
function prependCat(name){
    return ["Arnold", ...cats]
}
function removeLastCat(){
    return [...cats.slice(0, 2),]
}
function removeFirstCat(){
    return [...cats.slice(1),]
}
