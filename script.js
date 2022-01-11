function caesarPopup() {
  var popup = document.getElementById("caesarPopup");
  popup.classList.toggle("show");
}

function vigePopup(){
  var popup = document.getElementById("vigePopup");
  popup.classList.toggle("show");
}

function atbPopup(){
  var popup = document.getElementById("atbPopup");
  popup.classList.toggle("show");
}

function a1Popup(){
  var popup = document.getElementById("a1Popup");
  popup.classList.toggle("show");
}

let alph = "abcdefghijklmnopqrstuvwxyz";
let alphArray = alph.split("");

function caesarDecrypt() {
  encrypted = String(document.querySelector("#cmessage").value);
  shift = Number(document.querySelector("#cshift").value);
  let xArray = encrypted.split("");
  let decrypted = "";
  for (let i=0; i<xArray.length; i++) {
    if (xArray[i]==' '){
      decrypted += ' ';
    }
    else {
      let ogIndex = alphArray.indexOf(xArray[i]);
      shiftIndex = (ogIndex + shift)%26;
      if (shiftIndex<0)
        shiftIndex += 26;
      decrypted += alphArray[shiftIndex];
    }
  }
document.getElementById("canswer").value = decrypted;
}

function vigeDecrypt() {
  encrypted = String(document.querySelector("#vmessage").value);
  key = String(document.querySelector("#vshift").value);
  let xArray = encrypted.split("");
  let yArray = key.split("");
  let decrypted = "";
  let n = 0;
  for (let i=0; i<xArray.length; i++) {
    if (xArray[i]==' '){
      decrypted += ' ';
    }
    else {
      shift = alphArray.indexOf(yArray[n%(yArray.length)]);
      ogIndex = alphArray.indexOf(xArray[i]);
      newIndex = (ogIndex + shift)%26;
      decrypted += alphArray[newIndex];
      n++;
    }
  }
  document.getElementById("vanswer").value = decrypted;
}  

function atbDecrypt() {
  encrypted = String(document.querySelector("#amessage").value);
  let xArray = encrypted.split("");
  let decrypted = "";
  for (let i=0; i<xArray.length; i++) {
    if (xArray[i]==' '){
      decrypted += ' ';
    }
    else {
      ogIndex = alphArray.indexOf(xArray[i]);
      newIndex = 25-ogIndex;
      decrypted += alphArray[newIndex];
    }
  }
  document.getElementById("aanswer").value = decrypted;
}  

function a1Encrypt() {
  encrypted = String(document.querySelector("#a1encrypt").value);
  let xArray = encrypted.split("");
  let decrypted = "";
  for (let i=0; i<xArray.length; i++) {
    if (xArray[i]==' '){
      decrypted += '/ ';
    }
    else {
      decrypted += (alphArray.indexOf(xArray[i]) + ' ');
    }
  }
  document.getElementById("a1encrypted").value = decrypted;
}

function a1Decrypt() {
  message = String(document.querySelector("#a1decrypt").value);
  let xArray = message.split(" ");
  let decrypted = "";
  for (let i=0; i<xArray.length; i++) {
    if (xArray[i]=='/'){
      decrypted += ' ';
    }
    else {
      decrypted += alphArray[(xArray[i])%26];
    }
  }
  document.getElementById("a1decrypted").value = decrypted;
}