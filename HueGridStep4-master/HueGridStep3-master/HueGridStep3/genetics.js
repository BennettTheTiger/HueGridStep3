//handles the genetics for the hueGrids


//make a random chromosome
function makeNewGrid(){
 var chromosome = [5];
 chromosome[0] = Math.ceil(Math.random()*25);//how much each cell can deviate
 chromosome[1] = Math.ceil(Math.random()*100);//how saturated the blocks are
 chromosome[2] = Math.ceil(Math.random()*360);//max saturation value 
 chromosome[3] = Math.floor(Math.random()*2);//cirlce or square
 chromosome[4] = Math.floor(Math.random()*4);//what kind of art style
    
    return chromosome;
}

//get a chromosome to mutate
function mutate(chromo){
    
}

//returns the chromosomes of their child
function breed(parent1,parent2){
    
    
}

//favorable traits
function goodTrait(chromo){
    
}

function badTrait(chromo){
    
}

