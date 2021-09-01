noseX = "";
noseY = "";


function preload(){
mustache1 = loadImage('https://i.postimg.cc/5yHwMPv6/mu.png');
}

function setup(){

canvas = createCanvas(450, 450);
vid = createCapture(VIDEO);
canvas.center();
vid.size(450, 450);
vid.hide();

pose = ml5.poseNet(vid, modelloaded);
pose.on('pose', gotPoses);
}

function draw(){
fill(0, 0, 0);
stroke(0,0, 0);
image(vid, 0, 0, 450, 450);
image(mustache1, noseX - 15, noseY -15, 50, 50);
}

function take_snapshot(){

save("Mustache.jpeg");
}

function modelloaded(){

console.log("PoseNet Loaded");
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}
}