Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("camera")



function capture() {
    Webcam.snap(
        function(img) {
         document.getElementById("result").innerHTML=`<img src=${img} id="capimg">`   
        }
       
    )
}

//Check ML5 versionn
console.log("ml5 version:",ml5.version)

//Import the model
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h13GvSVp0/model.json",modelloaded)
function modelloaded() {
    console.log("The 'modelloded' protocal has been succsessfully carried on")
}