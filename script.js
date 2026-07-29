const story=[


    {
    
    text:
    `سلام و عرض خوش‌آمد خدمت خانواده‌های عزیز.
    
    خیلی خوشحالیم که امروز در کنار شما هستیم.
    به اردوی شاد و متنوع اختتامیه پایگاه تابستانی مدرسه علوی سردارجنگل خوش اومدید.`,
    
    image:"1.jpg",
    
    background:"1.jpg",
    
    audio:"audio1.mp3",
    
    speed:73
    
    },
    
    
    
    {
    
    text:
    `امروز قراره یک ساعت و نیم در کنار فرزندتون، کلی لحظه شاد و خاطره‌انگیز بسازید.
    با شرکت در بازی‌ها و ایستگاه‌های مختلف، خودتون رو محک بزنید، با بقیه اولیا و دانش‌آموزها رقابت کنید و یک روز متفاوت و پر از هیجان رو تجربه کنید.`,
    
    image:"2.jpg",
    
    background:"2.jpg",
    
    audio:"audio2.mp3",
    
    speed:83
    
    },
    
    
    
    {
    
    text:
    `معلم‌های پایه در فضای سایت و آزمایشگاه منتظر شما هستند.
    اینجا علاوه بر اینکه می‌تونید در ایستگاه‌های آموزشی شرکت کنید و امتیاز بگیرید، می‌تونید کارنامه تابستانی فرزندتون رو هم تحویل بگیرید.`,
    
    image:"3.jpg",
    
    background:"3.jpg",
    
    audio:"audio3.mp3",
    
    speed:74
    
    },
    
    
    
    {
    
    text:
    `یک پیشنهاد ویژه هم براتون داریم؛ حتماً به آقای نیکزاد سر بزنید.
    پروژه‌های جذاب دانش‌آموزان پایه‌های چهارم تا ششم که در طول تابستان با کمک هوش مصنوعی انجام شده، داخل وب‌سایت مدرسه قرار گرفته.
    شما می‌تونید این پروژه‌ها رو ببینید و به هر کدوم امتیاز بدید.`,
    
    image:"4.jpg",
    
    background:"4.jpg",
    
    audio:"audio4.mp3",
    
    speed:76
    
    },
    

{

    text:
    `در فضای ناهارخوری هم نمایشگاه آثار دانش‌آموزان برپا شده.
    حتماً سری به این بخش بزنید و از دیدن خلاقیت‌ها و کارهای زیبای بچه‌ها لذت ببرید.`,
    
    image:"5.jpg",
    
    background:"5.jpg",
    
    audio:"audio5.mp3",
    
    speed:76
    },
    
    
    
    {
    
    text:
    `غرفه‌های بازی هم در ناهارخوری و حیاط مدرسه آماده هستند.
    از هر غرفه می‌تونید کارت‌های امتیاز ۱۰ امتیازی دریافت کنید.`,
    
    image:"6.jpg",
    
    background:"6.jpg",
    
    audio:"audio6.mp3",
    
    speed:73
    
    },
    
    
    
    {
    
    text:
    `فقط یک نکته مهم رو یادتون باشه؛
    همه بازی‌ها یکسان نیستند. بعضی بازی‌ها راحت‌تر هستند و امتیاز کمتری دارند، بعضی بازی‌ها سخت‌ترند اما امتیاز بیشتری به شما می‌دهند.`,
    
    image:"7.jpg",
    
    background:"7.jpg",
    
    audio:"audio7.mp3",
    
    speed:78
    
    },
    
    
    
    {
    
    text:
    `حالا انتخاب با شما و فرزندتونه؛
    می‌خواید چند بازی ساده‌تر انجام بدید و امتیاز جمع کنید، یا اینکه وارد چالش‌های سخت‌تر بشید و برای امتیازهای بیشتر تلاش کنید.`,
    
    image:"8.jpg",
    
    background:"8.jpg",
    
    audio:"audio8.mp3",
    
    speed:76
    
    },
    
{

    text:
    ` امتیازهایی که از غرفه‌ها جمع می‌کنید، ارزشمند هستند؛ چون می‌تونید با اون‌ها به کافی‌شاپ و غرفه جوایز مراجعه کنید و خرید انجام بدید.فقط حواستون باشه که زمان محدوده.`,
    
    image:"9.jpg",
    
    background:"9.jpg",
    
    audio:"audio9.mp3",
    
    speed:73
    
    },
    {
        text:
    `ممکنه بعضی بازی‌های سخت زمان زیادی از شما بگیرند و در نهایت امتیاز کافی دریافت نکنید.
    پس هوشمندانه انتخاب کنید و با کمک فرزندتون زمان و امتیازها رو مدیریت کنید.
    امیدواریم امروز حسابی بهتون خوش بگذره و همراه با فرزندتون یک خاطره شیرین و ماندگار از پایگاه تابستانی مدرسه علوی بسازید.
    از همراهی شما ممنونیم.`,
        image:"10.jpg",
        background:"10.jpg",
        audio:"audio10.mp3",
        speed:80
    },
    

    ];
/* ========================= */
/* متغیرهای اصلی */
/* ========================= */


let index=0;

let typingTimer;

let currentAudio=null;

let audioCache=[];





/* ========================= */
/* آماده سازی صداها */
/* ========================= */


function preloadAudios(){


story.forEach(item=>{


let audio=new Audio();


audio.src=item.audio;


audio.preload="auto";


audioCache.push(audio);



});


}


preloadAudios();






/* ========================= */
/* ورود به صفحه دوم */
/* ========================= */


function openSummer(){


let home=document.getElementById("home-section");

let summer=document.getElementById("summer-section");



home.style.opacity="0";



setTimeout(()=>{


home.style.display="none";


summer.style.display="flex";


summer.style.opacity="1";



},600);



}







/* ========================= */
/* شروع داستان */
/* ========================= */


function startStory(){


index=0;


document.getElementById("start-btn").style.display="none";


showStory();



}







/* ========================= */
/* نمایش داستان */
/* ========================= */


function showStory(){


clearTimeout(typingTimer);


stopAudio();



let box=document.getElementById("typing-text");


box.innerHTML="";



let text=story[index].text;



changeImage();


playAudio();




let char=0;



function typing(){



if(char < text.length){



let letter=text.charAt(char);



if(letter=="\n"){


box.innerHTML+="<br>";


}

else{


box.innerHTML+=letter;


}



char++;



typingTimer=setTimeout(

typing,

story[index].speed

);



}



}



typing();



}







/* ========================= */
/* تغییر عکس و بک گراند */
/* ========================= */


function changeImage(){


let image=document.getElementById("booth-image");


let bg=document.getElementById("background-image");



image.style.opacity="0";



setTimeout(()=>{



image.src=story[index].image;



image.style.opacity="1";





if(bg){



bg.style.backgroundImage=

`url(${story[index].background || story[index].image})`;



}



},400);



}








/* ========================= */
/* بعدی */
/* ========================= */


function nextStory(){


if(index < story.length-1){


index++;


showStory();


}



}








/* ========================= */
/* قبلی */
/* ========================= */


function previousStory(){


if(index>0){


index--;


showStory();


}



}








/* ========================= */
/* پخش صدا */
/* ========================= */


function playAudio(){


stopAudio();



currentAudio=audioCache[index];



if(currentAudio){


currentAudio.currentTime=0;


currentAudio.play().catch(()=>{});


}



}







/* ========================= */
/* توقف صدا */
/* ========================= */


function stopAudio(){


if(currentAudio){


currentAudio.pause();


currentAudio.currentTime=0;


}



}







/* ========================= */
/* تازه سازی */
/* ========================= */


function resetStory(){


clearTimeout(typingTimer);


stopAudio();


index=0;



document.getElementById("typing-text").innerHTML=

"برای شروع بازدید روی دکمه شروع کلیک کنید.";



document.getElementById("booth-image").src="1.jpg";



let bg=document.getElementById("background-image");


if(bg){


bg.style.backgroundImage="url(1.jpg)";


}



document.getElementById("start-btn").style.display="block";



}







/* ========================= */
/* بازگشت */
/* ========================= */


function backHome(){


stopAudio();


clearTimeout(typingTimer);



document.getElementById("summer-section").style.display="none";



document.getElementById("home-section").style.display="flex";



resetStory();



}