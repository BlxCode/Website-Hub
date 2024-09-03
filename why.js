document.body.addEventListener("click", () => {
    console.log("Body clicked, redirecting to https://chatgpt.com");
    location.href = "https://chatgpt.com";
});

var synth = window.speechSynthesis;
 synth.getVoices();
function Talk(What) {
   
    console.log("Preparing to speak:", What);
    var utterance = new SpeechSynthesisUtterance(What);
    utterance.lang = 'zh-CN'; // Set language to Chinese
    synth.speak(utterance);
    console.log("Speech synthesis triggered.");
}

function convertToChineseNumber(num) {
    const chineseDigits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    return num.toString().split('').map(digit => chineseDigits[parseInt(digit)]).join('');
}

document.getElementById("num").addEventListener("click", () => {
    console.log("Button clicked");
    var numb = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
    console.log("Generated number:", numb);
 
    Talk(numb); // Speak the Chinese number
    setInterval(function(){
document.getElementById("num").click();
    },150)
});
var arthurtime = document.getElementById("dateing");
var date = new Date();
var dst;
if(date.getUTCMonth()<2&&date.getUTCMonth()>9){
dst = true;
}
var toshow;
function show(){
if(dst==true){
    arthurtime.innerHTML="British time: "+date.getUTCFullYear()+"/"+(Number(date.getUTCMonth())+1)+"/"+date.getUTCDate()+"("+(date.getUTCHours()+1)+":"+date.getUTCMinutes()+")";
}else{
    arthurtime.innerHTML="British time: "+date.getUTCFullYear()+"/"+(Number(date.getUTCMonth())+1)+"/"+date.getUTCDate()+"("+date.getUTCHours()+":"+date.getUTCMinutes()+")";
}
console.log(date.getUTCFullYear()+"/"+(Number(date.getUTCMonth())+1)+"/"+date.getUTCDate()+"("+date.getUTCHours()+":"+date.getUTCMinutes());
}
setInterval(show,314);
