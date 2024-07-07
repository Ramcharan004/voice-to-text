const text = document.querySelector('.text');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interinResults =true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    
    const texts = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');

    p.innerText = texts;
    text.appendChild(p);


    if(e.results[0].isFinal){
        if(texts.includes('hello') || texts.includes('hi'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi';
            text.appendChild(p);
        }


        if(texts.includes('open YouTube') || texts.includes('Open Youtube'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening YouTube';
            text.appendChild(p);
            window.open('https://www.youtube.com/')
        }

        if(texts.includes('open Google') || texts.includes('Open Google'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Google';
            text.appendChild(p);
            window.open('https://www.google.com/')
        }  

        if(texts.includes('open Gmail'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Gmail';
            text.appendChild(p);
            window.open('https://mail.google.com/')
        }  

        if(texts.includes('open GitHub') || texts.includes('Open GitHub'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Github';
            text.appendChild(p);
            window.open('https://github.com/')
        }
        if(texts.includes('open Flipkart website') || texts.includes('Open Flipkart'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Flipkart';
            text.appendChild(p);
            window.open('https://www.flipkart.com/')
        }

        if(texts.includes('open Amazon') || texts.includes('Open Amazon'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Amazon Shopping';
            text.appendChild(p);
            window.open('https://www.amazon.in/')
        }

        if(texts.includes('open Sathyabama website'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Sathyabama Website';
            text.appendChild(p);
            window.open('https://www.sathyabama.ac.in/')
        }

        
        if(texts.includes('what is your name') || texts.includes("what's your name") || texts.includes('What is your name?'))
        {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'My name is TARS';
            p.innerText = 'My name is TARS';
            text.appendChild(p);
        }

        p = document.createElement('p');
        }
       

    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})
recognition.start();

