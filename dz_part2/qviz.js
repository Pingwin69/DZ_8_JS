let beginBtn = document.querySelector('.beginBtn');
let begin = document.querySelector('.begin');
let qst1 = document.querySelector('.qst1');
let stats = document.querySelector('.stats');
let ans1Btn = document.querySelectorAll('.ans');
let stat1 = document.querySelector('.stat1');
let qst2 = document.querySelector('.qst2');
let qst3 = document.querySelector('.qst3');
let qst4 = document.querySelector('.qst4');
let qst5 = document.querySelector('.qst5');
let qst6 = document.querySelector('.qst6');
let qst7 = document.querySelector('.qst7');
let qst8 = document.querySelector('.qst8');
let qst9 = document.querySelector('.qst9');
let qst10 = document.querySelector('.qst10');
let stat2 = document.querySelector('.stat2');
let stat3 = document.querySelector('.stat3');
let stat4 = document.querySelector('.stat4');
let stat5 = document.querySelector('.stat5');
let stat6 = document.querySelector('.stat6');
let stat7 = document.querySelector('.stat7');
let stat8 = document.querySelector('.stat8');
let stat9 = document.querySelector('.stat9');
let stat10 = document.querySelector('.stat10');
let next = document.querySelectorAll('.next');
let qsts = document.querySelectorAll('.qsts');
let back = document.querySelectorAll('.back');
let stat = document.querySelectorAll('.stat');
let wrap = document.querySelector('.wrapper');
let colors = document.querySelector('.colors');
let again = document.querySelector('.again');
let againBtn = document.querySelector('.againBtn');


beginBtn.addEventListener('click', function(){
    begin.style.display = 'none';
    qst1.style.display = 'block';
    stats.style.display = 'flex';
    colors.style.display = 'block';
    again.style.display = 'block';
    
})

againBtn.addEventListener('click', function(){
   location.reload();
})




j = 0;


for(let i of back){
    i.addEventListener('click', function(){
        qsts[j].style.display = 'none';
        qsts[j-1].style.display = 'block';        
        j = j - 1;    
    })
}


for(let i of next){
    i.addEventListener('click', function(){
       
        qsts[j].style.display = 'none';
        qsts[j+1].style.display = 'block';        
        j = j + 1;    
    })    
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){

    let recognition = new SpeechRecognition();

    for(let i of ans1Btn){
   i.addEventListener('click', () =>{        
            recognition.start();  
            setTimeout(() => {
                recognition.stop();
            }, 2500);            
        }
    )};
    recognition.addEventListener('start', () =>{   
        console.log('Active record');
    });

    recognition.addEventListener('end', () =>{  
        console.log('End record');
    });

    recognition.addEventListener('result', (event) =>{
        console.log(event);
        let resultSpeech = event.results[0][0].transcript;  
        let app = resultSpeech.split(' ');

        function answer(x,y){
            if(app[app.length - 1] === "да" && x.style.display === 'block'){
            y.style.backgroundColor = 'green';
           
            } else if(app[app.length - 1] === "нет" && x.style.display === 'block'){
            y.style.backgroundColor = 'red';
            }
           
        }
        answer(qst1,stat1);
        answer(qst2,stat2);
        answer(qst3,stat3);
        answer(qst4,stat4);
        answer(qst5,stat5);
        answer(qst6,stat6);
        answer(qst7,stat7);
        answer(qst8,stat8);
        answer(qst9,stat9);
        answer(qst10,stat10);

    });

} 