function setUp(){
canvas = createCanvas(400, 400);
cam = createCapture(VIDEO);
canvas.center();
}

function draw(){
image(cam, 0, 0, 400, 400);
}