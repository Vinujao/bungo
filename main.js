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
function speak() {
    api=window.speechSynthesis
    Speechdata1="First prediction is "+prediction1
    Speechdata2="And the second prediction is"+prediction2
    utterthis=new SpeechSynthesisUtterance(Speechdata1+Speechdata2)
    api.speak(utterthis)
}
function predict(){
    img = document.getElementById("capimg");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    prediction1=results[0].label
    prediction2=results[1].label
    document.getElementById("emotion1").innerHTML=prediction1
    document.getElementById("emotion2").innerHTML=prediction2
    speak()
    if(prediction1=="Sad"){
        document.getElementById("emoji1").innerHTML="&#128532;"
    }
    if(prediction1=="Laughing"){
        document.getElementById("emoji1").innerHTML="&#128512;"
    }
    if(prediction1=="Happy"){
        document.getElementById("emoji1").innerHTML="&#128522;"
    }
    if(prediction1=="Anger"){
        document.getElementById("emoji1").innerHTML="&#128545;"}


        if(prediction2=="Sad"){
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
        if(prediction2=="Laughing"){
            document.getElementById("emoji2").innerHTML="&#128512;"
        }
        if(prediction2=="Happy"){
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        if(prediction2=="Anger"){
            document.getElementById("emoji2").innerHTML="&#128545;"}
}
          }