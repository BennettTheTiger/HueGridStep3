//handles the genetics for the hueGrids
var mutateKey = [25,100,360,2,4];

//make a random chromosome
function makeNewGrid(){
 var chromosome = [5];
 chromosome[0] = Math.floor(Math.random()*25);//how much each cell can deviate
 chromosome[1] = Math.floor(Math.random()*100);//how saturated the blocks are
 chromosome[2] = Math.floor(Math.random()*360);//max saturation value 
 chromosome[3] = Math.floor(Math.random()*2);//cirlce or square
 chromosome[4] = Math.floor(Math.random()*4);//what kind of art style
    
    return chromosome;
}

//get a chromosome to mutate
function mutate(chromo){
    var mutateIndex = Math.floor(Math.random()*chromo.length);//pick a random index to mutate
    chromo[mutateIndex] = Math.floor(Math.random()*mutateKey[mutateIndex]);//make a new random number for one gene in the chromosome
    return chromo;//give back the chromosome
}

//returns the chromosomes of their child
function breed(parent1,parent2){
    
    
}

//favorable traits
function goodTrait(chromo){
    
}

function badTrait(chromo){
    
}

