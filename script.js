//0.選取所有的card元素、設置全域變數
const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;  
let firstCard, secondCard;  
let lockFlip = false;  

//+1 計步數、計時，讓開始面板消失好開始遊戲
let movesCount = 0;
let totalTime = 0;  
let seconds;
let minutes;
let seconds_str = "";
let minutes_str = "";
let correct_paired = 0;
let timer;  

//+2 顯示結束面板、計分、評語
let score = "";
let comment_str = "";

//+3 匯入牌面主題  //之後問stackOverFlow吧
// let geturl = location.href;  //取url
// let url_str = new URL(geturl);  //轉為字串
// let theme = url_str.searchParams.get("theme");


//0.監聽所有的cards
cards.forEach(c => c.addEventListener('click',flipCard));  

//1.執行翻牌效果：翻牌效果>>>比對牌()
function flipCard(){
    

    if (lockFlip) return;  //阻止牌在pairedCards()或unflipCards()前被翻動

    if(this === firstCard) return;  //若click同一張，跳出

    this.classList.add('flip');  
    if(!hasFlippedCard){  
        hasFlippedCard = true;  
        firstCard = this;  
        movesCount++;  
        document.getElementById("moves").innerHTML = `${movesCount}`;  
        return;
    }
    secondCard = this;  
    movesCount++;  
    document.getElementById("moves").innerHTML = `${movesCount}`;  
    checkMatch();
    checkComplete();
}

//2.執行比對牌：比對牌>>>匹配()|不匹配()
function checkMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){  
        pairedCards();  
        return;
    }
    unflipCards();  
}

//2-1.執行已匹配牌的後續處理：不能再翻
function pairedCards(){
    correct_paired ++;     
    firstCard.removeEventListener('click',flipCard);  
    secondCard.removeEventListener('click',flipCard); 

    reset();  
}

//2-2.執行不匹配牌的後續處理：翻回去、lockFlip
function unflipCards(){
    lockFlip = true;  
    
    setTimeout(() => {  
        firstCard.classList.remove('flip');  
        secondCard.classList.remove('flip');  
        reset();  
    },600  
    );
}

//3.執行防止重複點擊同一張牌(重複點擊會達成匹配條件，使得牌被錯誤移除EventListener)
function reset(){ 
    hasFlippedCard = false;
    lockFlip = false;
    [firstCard, secondCard] = [null, null];  
}

//4.執行洗牌(IIFE(Immediately Invoked Functions Expressions))
(function shuffle(){  
    cards.forEach(c => {
        let ramdomPosition = Math.floor(Math.random()*12);
        c.style.order = ramdomPosition;
    });
})();  


//+1-0 開始遊戲(配合下面+1-1計時、+1-2計步數)
function startGame(){
    startTimer(0,0);
    document.getElementById("start").style.display = 'none';  
}

//+1-1 計時
function startTimer(seconds, minutes){
    timer = setInterval(() => {
        totalTime ++;  

        seconds >= 59 ? ((minutes+=1), (seconds = 0)) : (seconds += 1);  
        seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;  
        minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;  
        document.getElementById("time").innerHTML = `${minutes_str}:${seconds_str}`;  
        
        if (correct_paired >= 8){ 
            clearInterval(timer);
            return;
        }
    }, 1000);  
}

//+1-2 計步數
// 合併在function flipCard()中


//+2 顯示結果
function checkComplete(){
    if (correct_paired >= 8){  
        if(totalTime<30){  
            comment_str = "超！級！派！！！"
        }else if (totalTime<60){
            comment_str = "你可以再派一點";
        }else if (totalTime<90){
            comment_str = "啊不就好派";
        }else if (totalTime<120){
            comment_str = "一個平均的派";
        }else if (totalTime>240){
            comment_str = "要不要再來一個派？"
        }else if (totalTime>360){
            comment_str = ".這個一點也不派"
        }else if (totalTime>600){
            comment_str = "剛剛做啥去了？哼——！"
        }else{
            comment_str = "派！！！";
        }
        


        document.getElementById("end").style.display = 'flex';  //讓結束面板出現
        // document.getElementById("end").attributes('style', 'display: flex')  //這個方法不行
        // const endWindow = document.querySelectorAll('#end');  //這個方法也不行
        // endWindow.classList.remove('hide');

        document.getElementById("score").innerHTML = `你在${minutes_str}分${seconds_str}秒中，用了${movesCount}步達成了！`; 
        document.getElementById("comment").innerHTML = `評語：${comment_str}`;  
    }
}


//+3-0 取主題  //之後問stackOverFlow吧
// (function inputTheme(){
//     document.getElementById("title2").innerHTML = `${theme}`; 

//     if(theme == "cat"){
//         document.getElementById("testimg").src = `img/cat/f01.png`; 
        
//         document.getElementsByClassName("img1").src = `img/cat/f01.png`; 
//         document.getElementsByClassName("img2").src = `img/cat/f02.png`; 
//         document.getElementsByClassName("img3").src = `img/cat/f03.png`; 
//         document.getElementsByClassName("img4").src = `img/cat/f04.png`; 
//         document.getElementsByClassName("img5").src = `img/cat/f05.png`; 
//         document.getElementsByClassName("img6").src = `img/cat/f06.png`; 
//         document.getElementsByClassName("img7").src = `img/cat/f07.png`; 
//         document.getElementsByClassName("img8").src = `img/cat/f08.png`; 
//         document.getElementsByClassName("img8").src = `img/cat/f08.png`; 
        
//     }
// })();




