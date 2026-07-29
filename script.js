const story=[

    {
    text:"سلام و عرض خوش‌آمد خدمت خانواده‌های عزیز.\n\nخیلی خوشحالیم که امروز در کنار شما هستیم.\nبه اردوی شاد و متنوع اختتامیه پایگاه تابستانی مدرسه علوی سردارجنگل خوش اومدید.",
    image:"welcome.jpg",
    audio:"audio1.mp3",
    speed:95
    },
    
    {
    text:"امروز قراره یک ساعت و نیم در کنار فرزندتون، کلی لحظه شاد و خاطره‌انگیز بسازید.\nبا شرکت در بازی‌ها و ایستگاه‌های مختلف، خودتون رو محک بزنید، با بقیه اولیا و دانش‌آموزها رقابت کنید و یک روز متفاوت و پر از هیجان رو تجربه کنید.",
    image:"family.jpg",
    audio:"audio2.mp3",
    speed:90
    },
    
    {
    text:"معلم‌های پایه در فضای سایت و آزمایشگاه منتظر شما هستند.\nاینجا علاوه بر اینکه می‌تونید در ایستگاه‌های آموزشی شرکت کنید و امتیاز بگیرید، می‌تونید کارنامه تابستانی فرزندتون رو هم تحویل بگیرید.",
    image:"lab.jpg",
    audio:"audio3.mp3",
    speed:85
    },
    
    {
    text:"یک پیشنهاد ویژه هم براتون داریم؛ حتماً به آقای نیکزاد سر بزنید.\nپروژه‌های جذاب دانش‌آموزان پایه‌های چهارم تا ششم که در طول تابستان با کمک هوش مصنوعی انجام شده، داخل وب‌سایت مدرسه قرار گرفته.\nشما می‌تونید این پروژه‌ها رو ببینید و به هر کدوم امتیاز بدید.",
    image:"ai-project.jpg",
    audio:"audio4.mp3",
    speed:85
    },
    
    {
    text:"در فضای ناهارخوری هم نمایشگاه آثار دانش‌آموزان برپا شده.\nحتماً سری به این بخش بزنید و از دیدن خلاقیت‌ها و کارهای زیبای بچه‌ها لذت ببرید.",
    image:"exhibition.jpg",
    audio:"audio5.mp3",
    speed:85
    },
    
    
    {
    text:"غرفه‌های بازی هم در ناهارخوری و حیاط مدرسه آماده هستند.\nاز هر غرفه می‌تونید کارت‌های امتیاز ۱۰ امتیازی دریافت کنید.",
    image:"game.jpg",
    audio:"audio6.mp3",
    speed:85
    },
    
    
    {
    text:"فقط یک نکته مهم رو یادتون باشه؛\nهمه بازی‌ها یکسان نیستند.\nبعضی بازی‌ها راحت‌تر هستند و امتیاز کمتری دارند، بعضی بازی‌ها سخت‌ترند اما امتیاز بیشتری به شما می‌دهند.",
    image:"challenge.jpg",
    audio:"audio7.mp3",
    speed:85
    },
    
    
    {
    text:"حالا انتخاب با شما و فرزندتونه؛\nمی‌خواید چند بازی ساده‌تر انجام بدید و امتیاز جمع کنید، یا اینکه وارد چالش‌های سخت‌تر بشید و برای امتیازهای بیشتر تلاش کنید.",
    image:"challenge.jpg",
    audio:"audio8.mp3",
    speed:85
    },
    
    
    {
    text:"امتیازهایی که از غرفه‌ها جمع می‌کنید، ارزشمند هستند؛ چون می‌تونید با اون‌ها به کافی‌شاپ و غرفه جوایز مراجعه کنید و خرید انجام بدید.\n\nفقط حواستون باشه که زمان محدوده.",
    image:"prize.jpg",
    audio:"audio9.mp3",
    speed:80
    },
    
    
    {
    text:"ممکنه بعضی بازی‌های سخت زمان زیادی از شما بگیرند و در نهایت امتیاز کافی دریافت نکنید.\nپس هوشمندانه انتخاب کنید و با کمک فرزندتون زمان و امتیازها رو مدیریت کنید.\n\nامیدواریم امروز حسابی بهتون خوش بگذره و همراه با فرزندتون یک خاطره شیرین و ماندگار از پایگاه تابستانی مدرسه علوی بسازید.\n\nاز همراهی شما ممنونیم.",
    image:"end.jpg",
    audio:"audio10.mp3",
    speed:90
    }
    
    ];
    
    
    
    let index=0;
    
    let typingTimer;
    
    let currentAudio=null;
    
    
    
    // ذخیره صداها برای پخش سریع
    
    let audioCache=[];
    
    
    
    function preloadAudios(){
    
    
    story.forEach(item=>{
    
    
    let audio=new Audio();
    
    
    audio.src=item.audio;
    
    
    audio.preload="auto";
    
    
    audioCache.push(audio);
    
    
    });
    
    
    }
    
    
    
    preloadAudios();
    function openSummer(){


        let home=document.getElementById("home-section");
        
        let summer=document.getElementById("summer-section");
        
        
        
        home.classList.add("hide");
        
        
        
        setTimeout(()=>{
        
        
        home.style.display="none";
        
        
        summer.style.display="flex";
        
        
        summer.classList.add("show");
        
        
        },700);
        
        
        }
        
        
        
        
        
        
        
        function startStory(){
        
        
        index=0;
        
        
        showStory();
        
        
        
        document.getElementById("start-btn").style.display="none";
        
        
        }
        
        
        
        
        
        
        
        function showStory(){
        
        
        clearTimeout(typingTimer);
        
        
        
        stopAudio();
        
        
        
        let text=story[index].text;
        
        
        
        changeImage();
        
        
        
        let box=document.getElementById("typing-text");
        
        
        box.innerHTML="";
        
        
        
        let char=0;
        
        
        
        // شروع تایپ متن
        
        
        function typing(){
        
        
        
        if(char < text.length){
        
        
        
        let currentChar=text.charAt(char);
        
        
        
        // تبدیل خط جدید به فاصله مناسب
        
        if(currentChar=="\n"){
        
        box.innerHTML+="<br>";
        
        }
        
        else{
        
        box.innerHTML+=currentChar;
        
        }
        
        
        
        char++;
        
        
        
        typingTimer=setTimeout(
        
        typing,
        
        story[index].speed
        
        );
        
        
        
        }
        
        else{
        
        
        
        // بعد از پایان تایپ صدا پخش شود
        
        setTimeout(()=>{
        
        
        playAudio();
        
        
        },200);
        
        
        
        }
        
        
        }
        
        
        
        typing();
        
        
        }
        
        
        
        
        
        
        
        function changeImage(){
        
        
        
        let image=document.getElementById("booth-image");
        
        
        
        image.style.opacity="0";
        
        
        
        setTimeout(()=>{
        
        
        image.src=story[index].image;
        
        
        image.style.opacity="1";
        
        
        
        },300);
        
        
        
        }
        
        
        
        
        
        
        
        function nextStory(){
        
        
        
        if(index < story.length-1){
        
        
        
        index++;
        
        
        
        showStory();
        
        
        
        }
        
        
        
        }
        
        
        
        
        
        
        
        function previousStory(){
        
        
        
        if(index > 0){
        
        
        
        index--;
        
        
        
        showStory();
        
        
        
        }
        
        
        
        }
        function playAudio(){


            stopAudio();
            
            
            
            currentAudio=audioCache[index];
            
            
            
            if(!currentAudio){
            
            console.log("صدا پیدا نشد");
            
            return;
            
            }
            
            
            
            currentAudio.currentTime=0;
            
            
            
            currentAudio.volume=1;
            
            
            
            currentAudio.play()
            
            .then(()=>{
            
            
            console.log("پخش شد:",story[index].audio);
            
            
            })
            
            .catch(error=>{
            
            
            console.log("خطای پخش صدا:",error);
            
            
            });
            
            
            }
            
            
            
            
            
            
            
            function stopAudio(){
            
            
            
            if(currentAudio){
            
            
            
            currentAudio.pause();
            
            
            
            currentAudio.currentTime=0;
            
            
            
            }
            
            
            
            }
            
            
            
            
            
            
            
            function resetStory(){
            
            
            
            clearTimeout(typingTimer);
            
            
            
            stopAudio();
            
            
            
            index=0;
            
            
            
            document.getElementById("typing-text").innerHTML=
            
            "برای شروع بازدید روی دکمه شروع کلیک کنید.";
            
            
            
            document.getElementById("booth-image").src="welcome.jpg";
            
            
            
            document.getElementById("start-btn").style.display="block";
            
            
            
            }
            
            
            
            
            
            
            
            function backHome(){
            
            
            
            stopAudio();
            
            
            
            document.getElementById("summer-section").style.display="none";
            
            
            
            document.getElementById("home-section").style.display="flex";
            
            
            
            resetStory();
            
            
            
            }
            
            
            
            
            
            
            
            window.onload=function(){
            
            
            
            document.getElementById("prev-btn").style.display="block";
            
            
            
            document.getElementById("next-btn").style.display="block";
            
            
            
            document.getElementById("reset-btn").style.display="block";
            
            
            
            };