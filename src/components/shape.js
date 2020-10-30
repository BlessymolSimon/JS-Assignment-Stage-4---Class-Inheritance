class Shape {
    constructor() {
        this.color="red";
    }
    drawShape(){
        console.log("drawing a shape");
    }
    calculateArea() {
        console.log("calculating area of a shape");
    }
}

module.exports=Shape;