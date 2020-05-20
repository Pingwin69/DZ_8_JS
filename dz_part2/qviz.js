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
let stats1 = document.querySelectorAll('.stat');
let ps = document.querySelectorAll('p');

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
            if(app[app.length - 1] === "да"  && x.style.display === 'block'){
            y.style.backgroundColor = 'green';           
            } else if(app[app.length - 1] === "нет" && x.style.display === 'block'){
            y.style.backgroundColor = 'red';
            } else  if(app[app.length - 1] === "Yes"  && x.style.display === 'block'){
                y.style.backgroundColor = 'green';
            } else if(app[app.length - 1] === "No" && x.style.display === 'block'){
                y.style.backgroundColor = 'red';}
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
const KEY_YANDEX_TRANSLATE  = 'trnsl.1.1.20200514T131706Z.1dcb7af1cc60b7b5.b50bdfc7cd26c135ce1f342a455bab9bec82b064';
let str_new = beginBtn.innerHTML;

var burg = document.querySelector('.trans');
burg.onclick = function(){
    addMenu();
}

function addMenu(){
    document.querySelector('.transShadow').classList.toggle('show');
}

let divs = document.querySelectorAll('div');
let eng = document.querySelector('.eng');
let ru = document.querySelector('.ru');

let v = 0;
let v1 = 0;



eng.addEventListener('click', function(){
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ans1Btn[1].innerHTML+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of ans1Btn){
                    i.innerText = (data.text[0])
                }
               
            }
        )
    }
)
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ next[1].innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of next){
                    i.innerText = (data.text[0])
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ back[1].innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of back){
                    i.innerText = (data.text[0])
                }
            }
        )
    }
)

fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ stats1[0].innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of stats1){
                    v = v + 1 + '';                                   
                    i.innerText = (data.text[0].substring(0, data.text[0].length - 1));                                    
                    i.innerText = i.innerText + v;         
                    v = Number(v);                 
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ ps[0].innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of ps){
                    v1 = v1 + 1 + '';                                   
                    i.innerText = (data.text[0].substring(0, data.text[0].length - 1));                                    
                    i.innerText = i.innerText + v1;         
                    v1 = Number(v1);                 
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs1.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs1.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs2.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs2.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs3.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs3.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs4.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs4.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs5.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs5.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs6.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs6.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs7.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs7.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs8.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs8.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs9.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs9.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs10.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                qs10.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ reds.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                reds.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ greens.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                greens.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ greys.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                greys.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ beginBtn.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                beginBtn.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ againBtn.innerText+'&lang=ru-en')
.then(
    response =>{
        response.json().then(
            data =>{
                againBtn.innerText = (data.text[0])                           
                }
            
        )
    }
)
v = 0;
v1 = 0;
data.innerHTML =  Fulldate.toLocaleString("en-US", options);
})

ru.addEventListener('click', function(){
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ans1Btn[1].innerHTML+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of ans1Btn){
                    i.innerText = (data.text[0])
                }
               
            }
        )
    }
)
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ next[1].innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of next){
                    i.innerText = (data.text[0])
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ back[1].innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of back){
                    i.innerText = (data.text[0])
                }
            }
        )
    }
)

fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ stats1[0].innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of stats1){
                    v = v + 1 + '';                                   
                    i.innerText = (data.text[0].substring(0, data.text[0].length - 1));                                    
                    i.innerText = i.innerText + v;         
                    v = Number(v);                 
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ ps[0].innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                for(i of ps){
                    v1 = v1 + 1 + '';                                   
                    i.innerText = (data.text[0].substring(0, data.text[0].length - 1));                                    
                    i.innerText = i.innerText + v1;         
                    v1 = Number(v1);                 
                }
            }
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs1.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs1.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs2.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs2.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs3.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs3.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs4.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs4.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs5.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs5.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs6.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs6.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs7.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs7.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs8.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs8.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs9.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs9.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ qs10.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                qs10.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ reds.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                reds.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ greens.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                greens.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ greys.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                greys.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ beginBtn.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                beginBtn.innerText = (data.text[0])                           
                }
            
        )
    }
)
fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+ againBtn.innerText+'&lang=en-ru')
.then(
    response =>{
        response.json().then(
            data =>{
                againBtn.innerText = (data.text[0])                           
                }
            
        )
    }
)
v = 0;
v1 = 0;
data.innerHTML =  Fulldate.toLocaleString("ru", options);
})

let qs1 = document.querySelector('.qs1');
let qs2 = document.querySelector('.qs2');
let qs3 = document.querySelector('.qs3');
let qs4 = document.querySelector('.qs4');
let qs5 = document.querySelector('.qs5');
let qs6 = document.querySelector('.qs6');
let qs7 = document.querySelector('.qs7');
let qs8 = document.querySelector('.qs8');
let qs9 = document.querySelector('.qs9');
let qs10 = document.querySelector('.qs10');
let reds = document.querySelector('.reds1');
let greens = document.querySelector('.greens1');
let greys = document.querySelector('.greys1');
let data = document.querySelector('.data');


var Fulldate = new Date();
var year = Fulldate.getFullYear();
var month = Fulldate.getMonth() + 1;
var day = Fulldate.getDate();
var hour = Fulldate.getHours();
var minutes = Fulldate.getMinutes();

let options = {
year: 'numeric',
month: 'long',
day: 'numeric',
weekday: 'long',
timezone: 'UTC',
hour: 'numeric',
minute: 'numeric'
}




data.innerHTML = Fulldate.toLocaleString("ru", options);


