let pokemonList = [];
pokemonList.push({name:"Vanillite", height: 1.04, type: "water"});
pokemonList.push({name:"Klink", height: 1.6, type: "bug"});
pokemonList.push({name:"Deino", height: 0.5, type: "flying"});
for(let i = 0; i<pokemonList.length; i++){
    document.write(pokemonList[i].name+" ("+pokemonList[i].height+")"+ "<br>");
    
} 
document.write("<br><br>part 3<br><br>");

//task3//
for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height > 1.5) {
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall." + " " +"Wow, that is big!" +  "<br>")
    }
    else{
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall." + "<br>")}
}