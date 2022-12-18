NoseX=0;
NoseY=0;



function preload(){
    m2=loadImage('m2.png');
}

function setup(){
    canvas=createCanvas(450, 400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();

    poseNet=ml5.poseNet(webcam, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("nose x="+ NoseX);
        console.log("nose y="+ NoseY);
    }
}


function draw(){
    image(webcam, 0, 0, 450, 400);

    image(m2, NoseX-10, NoseY-0, 170, 75);

}

function take_snapshot(){
    save("image.png");
}