let cake, letters, cnv, saveButton,img;

var scaleC = 0.9;
var scaleL = 0.3;

function preload() {
  cake = createImg("assets/cake.png", "cake");
 letters = createImg("assets/cakelettersHL.png", "cake");
}

function setup() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBcUW9WEILz-BwuRd79U7MAFOjtXR4pDtY",
    authDomain: "barneycard.firebaseapp.com",
    projectId: "barneycard",
    storageBucket: "barneycard.appspot.com",
    messagingSenderId: "719251849976",
    appId: "1:719251849976:web:fa75179a451d210c3a310d",
    measurementId: "G-NY0SQRQYPE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  cnv = createCanvas(windowWidth, windowHeight);
  //background(255,200,10,50)
  cnv.position(0, 0);
  noCursor();
  saveButton=createButton("save");
  saveButton.mousePressed(saveSig);
  img = createImage(windowWidth, windowHeight);
}
//making a change
function draw() {
  cake.position(0.1 * windowWidth, 0.1 * windowHeight);
  cake.size(scaleC * windowHeight, scaleC * windowHeight);

  letters.size(0.3 * windowHeight, AUTO);
  letters.position(10, 60);

  if (mouseIsPressed) {
    stroke(10, 237, 64);
    strokeWeight(windowHeight / 100);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function saveSig(){
  console.log("saved");
  // Saves the canvas as an image by default
save(cnv, 'myCanvas3.jpg');
//save(img, 'myImage.png');

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
