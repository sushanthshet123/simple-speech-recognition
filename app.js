window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition= new SpeechRecognition();
//DOM Event//😕
let p =document.createElement("p");
let template=document.querySelector("#template")
recognition.addEventListener("result", e =>
{
   let transcript=e.results[0][0].transcript;
   template.innerHTML=transcript;
});
/////start event/😕
recognition.start();