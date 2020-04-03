var rect = require('./rectangle');
function solverectangle(l,b)
{
    rect(l,b,(err,rectangle) => {
        if(err) {
            console.log("ERROR:"+ err.message);
        }
        else {
            console.log("Area:"+ rectangle.area());
            console.log("Perimeter:"+ rectangle.perimeter());
        }
         
    });
}
solverectangle(2,4);
solverectangle(0,0);