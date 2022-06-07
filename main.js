function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/3I0o_Eswn/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;