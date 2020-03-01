var socket;

function setup() {
    createCanvas(350,350);
    background(51);
    
    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function draw() {
}

function mouseDragged() {
    console.log(mouseX+','+mouseY);
    noStroke();
    fill(255);
    let radius = 20;
    ellipse(mouseX,mouseY, radius, radius);
    
    let data = {x:mouseX,y:mouseY, r:radius};
    socket.emit('mouse',data);
}    

function newDrawing(data)
{
    noStroke();
    fill(color(218, 112, 214));    
    ellipse(data.x,data.y, data.r, data.r);
}