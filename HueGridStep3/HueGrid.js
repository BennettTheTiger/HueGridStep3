/* Hue Grid demo by Al Biles
 Fill the window with uniform squares, each of
 which has a hue value that will randomly deviate from its
 previous value.
 
 In this example, we'll just need a single float for
 each square, and each square derives its location on
 the window from its array subscripts.
 
 This incarnation sets the cellSize to 10 and initializes the hue
 values to be the row number * column number in the array, resulting
 in a hyperpolic striping effect that degrades to noise as the random
 deviations proceed.  Two alternative initialization methods are also
 supplied: See nested for loops in setup().
 
 You can change the cellSize, canvas dimensions, maximum deviation,
 and initialization method to get different effects.
 */
function HueGrid(x,y,maxWidth_p, maxHeight_p){
this.hueVal;       // Declare variable for 2D array of hue values
this.maxDev = Math.floor(Math.random() * 9) +3;   // Maximum value for the hue deviations
this.maxSat = 100;
this.maxHue = 360; // Maximum hue value, i.e., where it wraps around to 0

this.xOr = x;	
this.yOr = y;	
	
this.maxWidth = maxWidth_p;
this.maxHeight = maxHeight_p;
	
// These variables need to be "ints" because they'll be used for
// array dimensions, which must be integers (whole numbers)
this.cellSize = Math.floor(Math.random() *9) +7;   // Length of a square cell's side in pixels
  
  // Calculate number of rows and columns from window dimensions and cellSize
  // Have to round down to an int because we're using these for array sizes
  // and the division might not yield a whole number
  this.nRows = Math.floor(this.maxWidth / this.cellSize);  // "+ 1" handles cellSize that
  this.nCols = Math.floor(this.maxHeight / this.cellSize); //   doesn't divide evenly
  
  // 2D array is an array of arrays.
  // Length of the array is length of outer dimension (left subscript).
  // Length of each element of the array is length of the inner dimension
  // (second subscript) because each element of the array is an array.

  // Allocate the storage for the "outer" dimension of the 2D array
  this.hueVal = Array(this.nRows);
  this.satVal = Array(this.nRows);
  
  // Allocate storage for inner dimension
  //   and assign random values to each cell in the 2D array
  for (let r = 0; r < this.nRows; r++)
  {
    this.hueVal[r] = Array(this.nCols);         // First Allocate this row
	this.satVal[r] = Array(this.nCols);
	  
    for (let c = 0; c < this.nCols; c++)   // Then fill it with random hues
    {
      // Initialization method: Uncomment one of these
      this.hueVal[r][c] = Math.floor(Math.random() * 360);  // Start with random hues
	  this.satVal[r][c] = Math.floor(Math.random() * 33) + 68;
      //hueVal[r][c] = (r + c) * 10;    // Start with a diagonal stripes pattern
      //this.hueVal[r][c] = r * c;           // Start with a hyperbolic stripes pattern
    }
  }


	this.display = function()
	{
		push();
   		translate(this.xOr, this.yOr);     // Set the HueGrid's origin to xOr, yOr
		// Nested loops to draw each individual cell in the grid
		// Use the length attributes for the loop boundaries
		for (let r = 0; r < this.hueVal.length; r++)
		{
			// All elements of hueVal (hueVal[i]) have the same length
			for (let c = 0; c < this.hueVal[r].length; c++)
			{
				// The old tweak-the-hue-and-wrap-around-the-wheel trick
				this.hueVal[r][c] = this.hueVal[r][c] + random(-this.maxDev, this.maxDev);
				if (this.hueVal[r][c] > this.maxHue){
					this.hueVal[r][c] = this.hueVal[r][c] - this.maxHue;
				}
				else if (this.hueVal[r][c] < 0){
					this.hueVal[r][c] += this.maxHue;
				}
				fill(this.hueVal[r][c],this.satVal[r][c], 100);   // Max saturation and brightness
				// Scale row, column to window location by multiplying by cellSize
				rect(r*this.cellSize, c*this.cellSize, this.cellSize, this.cellSize);
			}
		}
		pop();	
	}
}
