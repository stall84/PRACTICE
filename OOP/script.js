



function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        donsole.log('draw');
    }
}

const another = new Circle(1);

console.log(another);