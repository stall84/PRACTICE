


function createCircle (radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };

}

const circle = createCircle(1);
const circle2 = createCircle(2);
const circle3 = createCircle(3);


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('DRAW BTICH!');
    }
}

const anotherCirc = new Circle(3.5);
