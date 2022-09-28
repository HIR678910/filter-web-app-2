nose_x = 0;
nose_y = 0;

function preload()
{
img = loadImage('https://i.postimg.cc/Mpbg8p3M/mustache3.png')
}

function setup()
{

    canvas = createCanvas( 500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function gotPoses (results)
{

    if(results.length > 0)
    {

        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);

    }

}

function modelLoaded ()
{

    console.log('PoseNet Is Initialaized');
}

function draw ()
{
    image(video,0,0,500,500);
    image( img, nose_x, nose_y, 30, 30);
 
}

function take_pic()
{
    save('pic.png')
}