song1="";
song2="";
song1status="";
song2status="";
scoreRightWrist=0;
scoreLeftWrist=0;

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 500);
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();  
    fill("green");
    stroke("yellow");
    if (scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song2.stop();
        if(song1status == false)
        {
            song1.play();
            document.getElementById("songname_button").innerHTML="playing Believer Song"
        }
    }

    if (scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song1.stop();
        if(song2status == false)
        {
            song2.play();
            document.getElementById("songname_button").innerHTML="playing Harry Potter Song"
        }
    }
}
function preload()
{
    song1 = loadSound("BELIEVE.mp3");
    song2 = loadSound("HARRY POTTER.mp3")}
function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
function gotPoses(results)
{
if (results.length > 0)
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
rightWristX = results[0].pose.rightWristX;
rightWristY = results[0].pose.rightWristY;
console.log("righttWristX=" + rightWristX + "rightWristY=" + rigthWristY);

leftWristX = results[0].pose.leftWristX;
leftWristY = results[0].pose.leftWristY;
console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
}
function pause()
{
    song.pause();
}