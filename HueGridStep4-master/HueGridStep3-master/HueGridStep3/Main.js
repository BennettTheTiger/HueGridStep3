var hg;
var huGd;
var genePool = [];//holds the genes for all of the grids 10 is the master race gene sequence
function setup(){
  createCanvas(940, 640);     // Initial window size when we built it
  background(0);
  colorMode(HSB);
    
   for(var i = 0; i < 10; i++){
     genePool[i] = makeNewGrid();//returns a new random chromosome  
   }
    
  huGd = Array(9);
    
  huGd[0] = new HueGrid(10,10,genePool[0]);
  huGd[1] = new HueGrid(320,10,genePool[1]);
  huGd[2] = new HueGrid(630,10,genePool[2]);
  huGd[3] = new HueGrid(10,220,genePool[3]);
  huGd[4] = new HueGrid(320,220,genePool[4]);
  huGd[5] = new HueGrid(630,220,genePool[5]);
  huGd[6] = new HueGrid(10,430,genePool[6]);
  huGd[7] = new HueGrid(320,430,genePool[7]);
  huGd[8] = new HueGrid(630,430,genePool[8]);
  noStroke(); 
}
function draw(){
	for(let i = 0; i<huGd.length; i++){
		huGd[i].display();
	}
}