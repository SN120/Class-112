Webcam.set({
    width: 620,
    height: 600,
    img_format:'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="result_img" src="'+data_uri+'"/>"'
    });
}
console.log("ml5 verion"+ ml5.version);
classifier = ml5.imageClassifier('MobileNet',ModelLoaded);
function ModelLoaded(){
    console.log("Model Loaded");
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("Image_name").innerHTML = result[0].label;
    }
}
function check(){
    img = document.getElementById("result_img");
    classifier.classify(img, gotResult);
}