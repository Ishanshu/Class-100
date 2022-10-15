var SpeechRecognition = window.webkitSpeechReconition;

var recognition = new SpeechRecogintion();

function start()
{
    document.getElementById("texbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

var Content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML = Content;
}

var recognition = new SpeechRecoginition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{

    console.log(event);

    var Content = event.result[0] [0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
          speak();
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterrance(speak_data);

    synth.speak(utterThis);
    Webcam.attak(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");