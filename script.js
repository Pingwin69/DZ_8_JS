let searchForm = document.querySelector('#search-form');
let searchFormInput = document.querySelector('input');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;




if(SpeechRecognition){
  
    searchForm.insertAdjacentHTML('beforeend', '<button type="button"><i class="fas fa-microphone"></i></button>');

    const microBtn = document.querySelector('button');
    const microIcon = document.querySelector('i');

    console.log('Hi, Chrome')

    let recognition = new SpeechRecognition();
    

   /*  recognition.continuous = true; */

    microBtn.addEventListener('click', () =>{
        if(microIcon.classList.contains('fa-microphone')){
            recognition.start();  
        } else{
            recognition.stop();
        }
    });

    recognition.addEventListener('start', () =>{   // start Speech
        microIcon.classList.remove('fa-microphone');
        microIcon.classList.add('fa-microphone-alt-slash');
        console.log('Active record');
    });

    recognition.addEventListener('end', () =>{  // stop Speech
        microIcon.classList.add('fa-microphone');
        microIcon.classList.remove('fa-microphone-alt-slash');
        console.log('End record');
    });

    recognition.addEventListener('result', (event) =>{
        console.log(event);
        let resultSpeech = event.results[0][0].transcript;  //получение данных в виде текста
        searchFormInput.value = resultSpeech;
        let app = resultSpeech.split(' ');
        

        setTimeout(() => {
            if(app[app.length - 1] === "найти"){
            app.pop();
            let app1 = app.join();            
            let reg = /,/g;
            let res = app1.replace(reg, " ");
            searchFormInput.value = res;  
            searchForm.submit();
           
            }
        }, 500);
    });

} else{
    console.log('no')    
}




