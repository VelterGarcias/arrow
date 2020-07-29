var audio = document.createElement('audio');
audio.src = 'https://www.botecodigital.info/exemplos/audio/i_am_the_doctor.mp3';
audio.play();
audio.loop = true;
audio.muted =true;

function play(){audio.currentTime = 0;audio.muted = false;}
function stop(){audio.muted = true;}




function addClassNameListener(elemId) {
    var elem = document.querySelector(elemId);
    var lastClassName = elem.className;
    window.setInterval( function() {   
       var className = elem.className;
        if (className !== lastClassName) {
            
            if (elem.classList.contains("enabled")){
play();  	 
             	setTimeout(function(){if (confirm("NOVA TAREFA, BORA TRABALHAR!!")) {stop();} else {stop();};},500); 

            }
            lastClassName = className;
        }
    },10);
}

addClassNameListener(".start-button");
console.log('%c script ATIVO! ', 'background: #222; color: #bada55; font-size: 40px;');
